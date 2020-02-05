import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './ButtonStyles';

export default function Button({ className, text, isSubmit, noBackground }) {
  return (
    <Wrapper
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      noBackground={noBackground}
    >
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
  noBackground: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  isSubmit: false,
  noBackground: false,
};
