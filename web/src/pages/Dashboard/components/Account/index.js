import React from 'react';
import { FaGlobeAmericas, FaTag, FaUser } from 'react-icons/fa';

import PropTypes from 'prop-types';

import { Container, LoadingDetail, Detail } from './styles';

export default function Account({ details, loading, onClick }) {
  if (loading)
    return (
      <Container loading={1}>
        <LoadingDetail width_="36%" />
        <LoadingDetail width_="58%" />
        <LoadingDetail width_="20%" />
      </Container>
    );

  return (
    <Container onClick={onClick}>
      <Detail>
        <FaGlobeAmericas className="icon" />
        <span>{details.service}</span>
      </Detail>
      <Detail emptyLabel={!details.label}>
        <FaTag className="icon" />
        <span>{details.label ? details.label : 'No label'}</span>
      </Detail>
      <Detail>
        <FaUser className="icon" />
        <span>{details.username}</span>
      </Detail>
    </Container>
  );
}

Account.propTypes = {
  details: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Account.defaultProps = {
  details: { service: '', label: '', username: '' },
  loading: false,
  onClick: () => {},
};
