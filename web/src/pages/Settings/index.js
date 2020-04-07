import React from 'react';
import { useStore } from 'react-redux';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';
import { showLoading, hideLoading } from '~/store/modules/form/actions';

import Form from '~/components/Form';
import SubmitButton from '~/components/FormSubmitButton';
import TextInput from '~/components/TextInput';

import { Container } from './styles';

export default function Settings() {
  const store = useStore();

  const {
    auth: { email },
  } = store.getState();

  const schema = Yup.object().shape({
    newEmail: Yup.string().email('Invalid e-mail address'),
    newPassword: Yup.lazy(value =>
      !value
        ? Yup.string()
        : Yup.string().min(8, 'Password must be at least 8 characters-long'),
    ),
    newPasswordConfirm: Yup.string().oneOf(
      [Yup.ref('newPassword'), null],
      "Passwords don't match",
    ),
    password: Yup.string().required('This field is required'),
  });

  const initialData = { newEmail: email };

  async function handleSubmit(data) {
    Object.keys(data).forEach(key => {
      if (data[key] === '') delete data[key];
    });

    if (data.newEmail === email) delete data.newEmail;
    if (!data.newEmail && !data.newPassword) {
      toast.error('You must edit either e-mail address or password');

      return;
    }

    try {
      store.dispatch(showLoading());

      await api.put('users', data);

      toast.success('Settings updated! You must re-login.');
      store.dispatch(signOut());
    } catch (error) {
      toast.error(error.response.data.error.msg);
    }

    store.dispatch(hideLoading());
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={initialData}>
        <h1>Settings</h1>
        <TextInput name="newEmail" placeholder="E-mail address" />
        <TextInput name="newPassword" placeholder="New password" isPassword />
        <TextInput
          name="newPasswordConfirm"
          placeholder="Confirm new password"
          isPassword
        />
        <TextInput name="password" placeholder="Current password*" isPassword />
        <SubmitButton text="Edit" isSubmit />
      </Form>
    </Container>
  );
}
