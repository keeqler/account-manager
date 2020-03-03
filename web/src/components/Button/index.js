import React from 'react';

import PropTypes from 'prop-types';

import loadingIcon from '~/assets/loading.svg';

import Wrapper from './styles';

export default function Button({
  className,
  text,
  loading,
  isSubmit,
  noBackground,
}) {
  return (
    <Wrapper
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      noBackground={noBackground}
    >
      {loading ? <img src={loadingIcon} alt="" /> : text}
    </Wrapper>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
  noBackground: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  isSubmit: false,
  noBackground: false,
  loading: false,
};
