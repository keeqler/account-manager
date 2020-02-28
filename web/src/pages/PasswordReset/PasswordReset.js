import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStore } from 'react-redux';
import * as Yup from 'yup';

import useFormState from '~/hooks/useFormState';

import { passwordReset } from '~/store/modules/auth/actions';

import Container from './PasswordResetStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

export default function PasswordReset({ match: { params } }) {
  const { dispatch } = useStore();
  const { loading, requestMessage } = useFormState();

  function handleSubmit({ code, email, password }) {
    dispatch(passwordReset(code, email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid e-mail address')
      .required('This field is required'),
    code: Yup.string()
      .length(12, 'Code must be 12 characters long')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match")
      .required('This field is required'),
  });

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={{ email: params.email }}
        schema={schema}
      >
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
          isPassword
        />
        <TextInput
          className="text-input"
          placeholder="Confirm new password"
          name="confirmPassword"
          isPassword
        />
        <Button
          className="submit"
          text="Reset password"
          loading={loading}
          isSubmit
        />
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
}

PasswordReset.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};
