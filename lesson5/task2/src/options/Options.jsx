import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { optionsListSelector } from './options.selectors';

const Options = ({ title, options }) => (
  <div className="options">
    <div className="options__title">{title}</div>
    <ul className="options__list">
      {options.map(option => (
        <li key={option.id}>
          <button
            className="options__list-item"
            //   onClick={() => moveOptions(option.id)}
          >
            {option.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Options.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  //   moveOptions: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    options: optionsListSelector(state),
  };
};

export default connect(mapState)(Options);
