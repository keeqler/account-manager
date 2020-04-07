import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { FormContext } from '~/Contexts';

import Container from './styles';

function Form({ children, schema, initialData, onSubmit, loading }) {
  return (
    <Container schema={schema} initialData={initialData} onSubmit={onSubmit}>
      <FormContext.Provider value={{ loading }}>
        {children}
      </FormContext.Provider>
    </Container>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

Form.defaultProps = {
  initialData: {},
};

const mapStateToProps = state => ({
  loading: state.form.loading,
});

export default connect(mapStateToProps)(Form);
