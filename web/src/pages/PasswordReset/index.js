import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Form from '~/components/Form';
import RequestMessage from '~/components/FormRequestMessage';
import SubmitButton from '~/components/FormSubmitButton';
import TextInput from '~/components/TextInput';
import { passwordReset } from '~/store/modules/auth/actions';

import Wrapper from './styles';

export default function PasswordReset({ match: { params } }) {
  const dispatch = useDispatch();

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
    <Wrapper>
      <Form
        onSubmit={handleSubmit}
        initialData={{ email: params.email }}
        schema={schema}
      >
        <h1>Password reset</h1>
        <TextInput placeholder="E-mail address" name="email" disabled />
        <TextInput placeholder="Recovery code" name="code" />
        <TextInput placeholder="New password" name="password" isPassword />
        <TextInput
          placeholder="Confirm new password"
          name="confirmPassword"
          isPassword
        />
        <SubmitButton text="Reset password" />
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
}

PasswordReset.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};
