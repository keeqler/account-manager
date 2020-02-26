import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useStore } from 'react-redux';

import Container from './LoginStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

import useFormState from '~/hooks/useFormState';

import { signInRequest } from '~/store/modules/auth/actions';

export default () => {
  const store = useStore();
  const { loading, requestMessage } = useFormState();

  function handleSubmit({ email, password }) {
    store.dispatch(signInRequest(email, password));
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
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <h1>Login</h1>
        <TextInput
          className="text-input"
          placeholder="E-mail address"
          name="email"
        />
        <TextInput
          className="text-input password"
          placeholder="Password"
          name="password"
          isPassword
        />
        <Link className="link" to="/forgotpassword">
          I forgot my password
        </Link>
        <Button className="submit" text="Login" loading={loading} isSubmit />
        <RequestMessage className="request-message" state={requestMessage} />
        <span className="last-link-wrapper">
          Don&apos;t have an account?{' '}
          <Link className="link" to="/register">
            Register now
          </Link>
        </span>
      </Form>
    </Container>
  );
};
