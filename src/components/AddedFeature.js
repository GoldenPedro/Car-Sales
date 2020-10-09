import React from 'react';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  const { feature, removeFeature } = props

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
