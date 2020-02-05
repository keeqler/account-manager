import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

import Container from './TextInputStyles';

export default function TextInput({
  className,
  placeholder,
  name,
  isPassword,
}) {
  return (
    <Container className={className}>
      <label>{placeholder}</label>
      <Input
        className="input"
        name={name}
        type={isPassword ? 'password' : 'text'}
        placeholder="."
      />
    </Container>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
};

TextInput.defaultProps = {
  className: '',
  isPassword: false,
};
