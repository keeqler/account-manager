import React from 'react';

import PropTypes from 'prop-types';

import loadingIcon from '~/assets/loading.svg';

import { Circle } from './styles';

export default function LoadingCircle({ width }) {
  return <Circle src={loadingIcon} alt="" width={width} />;
}

LoadingCircle.propTypes = {
  width: PropTypes.string,
};

LoadingCircle.defaultProps = {
  width: 'unset',
};
