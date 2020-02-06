import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import useRequestMessage from '~/hooks/useRequestMessage';

import Container from './ForgotPasswordStyles';
import Form from '~/components/Form';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import RequestMessage from '~/components/RequestMessage/RequestMessage';

export default () => {
  const [requestMessage, setRequestMessage] = useRequestMessage();

  function handleSubmit(data) {
    console.tron.log(data);
    setRequestMessage('test', true);
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
        <Button className="submit" text="Send" isSubmit />
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
};
