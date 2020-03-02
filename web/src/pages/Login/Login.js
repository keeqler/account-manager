import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import Form from '~/components/Form/Form';
import RequestMessage from '~/components/FormRequestMessage/FormRequestMessage';
import SubmitButton from '~/components/FormSubmitButton';
import TextInput from '~/components/TextInput/TextInput';
import { signInRequest } from '~/store/modules/auth/actions';

import Wrapper from './LoginStyles';

export default () => {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid e-mail address')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Invalid password')
      .required('This field is required'),
  });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} schema={schema}>
        <h1>Login</h1>
        <TextInput placeholder="E-mail address" name="email" />
        <TextInput
          className="password"
          placeholder="Password"
          name="password"
          isPassword
        />
        <Link to="/forgotpassword">I forgot my password</Link>
        <SubmitButton text="Login" />
        <RequestMessage />
        <span className="last-link-container">
          Don&apos;t have an account? <Link to="/register">Register now</Link>
        </span>
      </Form>
    </Wrapper>
  );
};
