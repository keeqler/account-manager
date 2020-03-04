import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { forgotPassword } from '~/store/modules/auth/actions';

import Form from '~/components/Form';
import RequestMessage from '~/components/FormRequestMessage';
import SubmitButton from '~/components/FormSubmitButton';
import TextInput from '~/components/TextInput';

import Wrapper from './styles';

export default () => {
  const dispatch = useDispatch();

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
    <Wrapper>
      <Form onSubmit={handleSubmit} schema={schema}>
        <h1>Password recovery</h1>
        <TextInput placeholder="E-mail address" name="email" />
        <SubmitButton text="Send" />
        <RequestMessage />
        <span className="last-link-container">
          Reminded your password?{' '}
          <Link className="link" to="/">
            Login now
          </Link>
        </span>
      </Form>
    </Wrapper>
  );
};
