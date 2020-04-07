import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import Form from '~/components/Form';
import SubmitButton from '~/components/FormSubmitButton';
import TextInput from '~/components/TextInput';

import Wrapper from './styles';

export default () => {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;

    dispatch(signUpRequest(email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid e-mail address')
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
      <Form onSubmit={handleSubmit} schema={schema}>
        <h1>Register</h1>
        <TextInput placeholder="E-mail address" name="email" />
        <TextInput placeholder="Password" name="password" isPassword />
        <TextInput
          placeholder="Confirm password"
          name="confirmPassword"
          isPassword
        />
        <SubmitButton text="Register" />
        <span className="last-link-container">
          Already have an account?{' '}
          <Link className="link" to="/">
            Login now
          </Link>
        </span>
      </Form>
    </Wrapper>
  );
};
