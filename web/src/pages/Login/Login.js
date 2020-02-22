import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import useRequestMessage from '~/hooks/useRequestMessage';

import Container from './LoginStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

import { signInRequest } from '~/store/modules/auth/actions';

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [requestMessage, setRequestMessage] = useRequestMessage();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
    // setRequestMessage('test', true);
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
        <Button className="submit" text="Login" isSubmit loading={loading} />
        <RequestMessage
          className="request-message"
          show={requestMessage.show}
          message={requestMessage.message}
          isError={requestMessage.isError}
        />
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
