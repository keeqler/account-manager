import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import { FormContext } from '~/Contexts';

import StandardButton from '~/components/Button';

export default function Button({ text }) {
  const { loading } = useContext(FormContext);

  return <StandardButton text={text} loading={loading} isSubmit />;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
