import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class SearchField extends React.Component {
  state = {
    userName: '',
  };

  onChange = event => {
    this.setState({ userName: event.target.value });
  };

  handelUserSearch = () => {
    this.props.fetchUserDate(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handelUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

SearchField.propTypes = {
  fetchUserDate: PropTypes.func.isRequired,
};

const mapDispatch = {
  fetchUserDate: userActions.fetchUserDate,
};

export default connect(null, mapDispatch)(SearchField);
