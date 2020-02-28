import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'react-redux';
import * as Yup from 'yup';

import useFormState from '~/hooks/useFormState';

import { forgotPassword } from '~/store/modules/auth/actions';

import Container from './ForgotPasswordStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

export default () => {
  const { dispatch } = useStore();
  const { loading, requestMessage } = useFormState();

  function handleSubmit(data) {
    const { email } = data;

    dispatch(forgotPassword(email));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid e-mail address')
      .required('This field is required'),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <h1>Password recovery</h1>
        <TextInput
          className="text-input"
          placeholder="E-mail address"
          name="email"
        />
        <Button className="submit" text="Send" loading={loading} isSubmit />
        <RequestMessage className="request-message" state={requestMessage} />
        <span className="last-link-wrapper">
          Reminded your password?{' '}
          <Link className="link" to="/">
            Login now
          </Link>
        </span>
      </Form>
    </Container>
  );
};
