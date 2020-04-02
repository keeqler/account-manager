import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/all';
import { CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '~/services/api';

import Button from '~/components/Button';
import Form from '~/components/Form';
import LoadingCircle from '~/components/LoadingCircle';
import TextInput from '~/components/TextInput';

import {
  Container,
  ModalWrapper,
  Modal,
  ModalCloseButtonWrapper,
  ShowSensitiveDataButton,
  DeleteButton,
  LoadingContainer,
  Overlay,
} from './styles';

const schema = Yup.object().shape({
  label: Yup.string(),
  service: Yup.string().required('This field is required'),
  username: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
  twofa_secret: Yup.lazy(value =>
    !value
      ? Yup.string()
      : Yup.string().min(16, '2FA secret must be at least 16 characters long'),
  ),
});

export default function AccountDataModal({
  id,
  show,
  isCreator,
  hide,
  addAccount,
  replaceAccount,
  removeAccount,
}) {
  const [accountData, setAccountData] = useState({});
  const [showSensitiveData, setShowSensitiveData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  async function onEnter() {
    if (!isCreator) {
      const response = await api.get(`accounts/${id}`);

      setAccountData(response.data);
      setLoading(false);
    }
  }

  function onExited() {
    setAccountData({});
  }

  async function handleSubmit(inputData) {
    if (isCreator) {
      setSubmitLoading(true);

      Object.keys(inputData).forEach(key => {
        if (inputData[key] === '') delete inputData[key];
      });

      try {
        const response = await api.post('accounts', inputData);

        addAccount({ ...inputData, ...response.data });
      } catch (error) {
        //
      }
    } else {
      // eslint-disable-next-line camelcase
      const { label, service, username, password, twofa_secret } = accountData;

      if (
        JSON.stringify(inputData) ===
        JSON.stringify({ label, service, username, password, twofa_secret })
      ) {
        hide();

        return;
      }

      setSubmitLoading(true);

      Object.keys(inputData).forEach(key => {
        if (inputData[key] === '' && accountData[key] !== inputData[key])
          delete inputData[key];
      });

      try {
        await api.put(`accounts/${id}`, inputData);

        replaceAccount({ ...accountData, ...inputData });
      } catch (error) {
        if (error.response?.data.error.code === 'nonexistentAccount')
          removeAccount(id);
      }
    }

    setSubmitLoading(false);
    hide();
  }

  async function handleAccountDelete() {
    await api.delete(`accounts/${id}`);

    removeAccount(id);
    hide();
  }

  useEffect(() => {
    if (show) setLoading(true);
  }, [show]);

  return (
    <Container>
      <CSSTransition
        classNames="modal"
        in={show}
        timeout={280}
        onEnter={onEnter}
        onExited={onExited}
        unmountOnExit
      >
        <ModalWrapper>
          <Modal>
            <ModalCloseButtonWrapper>
              <MdClose onClick={hide} />
            </ModalCloseButtonWrapper>
            {(!loading || isCreator) && (
              <Form
                schema={schema}
                initialData={{ ...accountData, id: accountData.id?.toString() }}
                onSubmit={handleSubmit}
              >
                <TextInput placeholder="Label" name="label" />
                <TextInput placeholder="Service *" name="service" />
                <TextInput placeholder="Username *" name="username" />
                <TextInput
                  placeholder="Password *"
                  name="password"
                  isPassword={!showSensitiveData}
                />
                <TextInput
                  placeholder="2FA secret"
                  name="twofa_secret"
                  isPassword={!showSensitiveData}
                />
                {!isCreator && (
                  <ShowSensitiveDataButton
                    onClick={() => setShowSensitiveData(!showSensitiveData)}
                    text="Toggle sensitive data"
                    noBackground
                  />
                )}
                <Button text="Save" loading={submitLoading} isSubmit />
                {!isCreator && (
                  <DeleteButton type="button" onClick={handleAccountDelete}>
                    Delete
                  </DeleteButton>
                )}
              </Form>
            )}
            {loading && !isCreator && (
              <LoadingContainer>
                <LoadingCircle width="80px" />
              </LoadingContainer>
            )}
          </Modal>
        </ModalWrapper>
      </CSSTransition>
      <CSSTransition classNames="overlay" in={show} timeout={280} unmountOnExit>
        <Overlay onClick={hide} />
      </CSSTransition>
    </Container>
  );
}

AccountDataModal.propTypes = {
  id: PropTypes.number,
  show: PropTypes.bool.isRequired,
  isCreator: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  addAccount: PropTypes.func.isRequired,
  replaceAccount: PropTypes.func.isRequired,
  removeAccount: PropTypes.func.isRequired,
};

AccountDataModal.defaultProps = {
  id: ({ id, isCreator }) => {
    if (typeof id !== 'number' && !isCreator)
      return new Error('Prop "id" is required');

    return null;
  },
};
