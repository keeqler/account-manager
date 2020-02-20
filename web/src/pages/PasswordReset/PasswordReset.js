import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import useRequestMessage from '~/hooks/useRequestMessage';

import Container from './PasswordResetStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

export default function PasswordReset({
  match: {
    params: { email },
  },
}) {
  const [requestMessage, setRequestMessage] = useRequestMessage();

  function handleSubmit(data) {
    console.tron.log(data);
    setRequestMessage('test', true);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid e-mail address')
      .required('This field is required'),
    code: Yup.string().required('This field is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match")
      .required('This field is required'),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={{ email }} schema={schema}>
        <h1>Password reset</h1>
        <TextInput
          className="text-input"
          placeholder="E-mail address"
          name="email"
          disabled
        />
        <TextInput
          className="text-input"
          placeholder="Recovery code"
          name="code"
        />
        <TextInput
          className="text-input"
          placeholder="New password"
          name="password"
        />
        <TextInput
          className="text-input"
          placeholder="Confirm new password"
          name="confirmPassword"
        />
        <Button className="submit" text="Reset password" isSubmit />
        <RequestMessage
          className="request-message"
          show={requestMessage.show}
          message={requestMessage.message}
          isError={requestMessage.isError}
        />
        <span className="last-link-wrapper">
          Reminded your password?{' '}
          <Link className="link" to="/">
            Login now
          </Link>
        </span>
      </Form>
    </Container>
  );
}

PasswordReset.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};
