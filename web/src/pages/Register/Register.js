import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Container from './RegisterStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

import useFormState from '~/hooks/useFormState';

import { signUpRequest } from '~/store/modules/auth/actions';

export default () => {
  const dispatch = useDispatch();
  const { loading, requestMessage } = useFormState();

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
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <h1>Register</h1>
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
        <TextInput
          className="text-input password"
          placeholder="Confirm password"
          name="confirmPassword"
          isPassword
        />
        <Button className="submit" text="Register" loading={loading} isSubmit />
        <RequestMessage className="request-message" state={requestMessage} />
        <span className="last-link-wrapper">
          Already have an account?{' '}
          <Link className="link" to="/">
            Login now
          </Link>
        </span>
      </Form>
    </Container>
  );
};
