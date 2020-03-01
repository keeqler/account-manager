import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

import Container from './TextInputStyles';

export default function TextInput({
  className,
  placeholder,
  name,
  isPassword,
  disabled,
}) {
  return (
    <Container className={`text-input ${className}`}>
      <label>{placeholder}</label>
      <Input
        name={name}
        type={isPassword ? 'password' : 'text'}
        placeholder="."
        disabled={disabled}
      />
    </Container>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  className: '',
  isPassword: false,
  disabled: false,
};
