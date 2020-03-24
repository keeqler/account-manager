import React from 'react';

import PropTypes from 'prop-types';

import LoadingCircle from '~/components/LoadingCircle';

import Wrapper from './styles';

export default function Button({
  className,
  onClick,
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
      onClick={onClick}
    >
      {loading ? <LoadingCircle /> : text}
    </Wrapper>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
  noBackground: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  isSubmit: false,
  noBackground: false,
  loading: false,
};
