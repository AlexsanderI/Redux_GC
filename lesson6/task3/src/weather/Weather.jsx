import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Сities from '../Сities';
import * as citiesActions from '../cities/cities.actions';
import { isCitiesSelector } from '../cities/cities.selectors';

const Weather = ({ cityData, fetchUserDate }) => {
  if (!cityData) {
    fetchUserDate();
    return null;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cityData.map(city => (
          <Сities key={city.id} {...city} />
        ))}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  fetchUserDate: PropTypes.func.isRequired,
  cityData: PropTypes.array,
};

Weather.defaultValue = {
  cityData: null,
};

const mapState = state => ({
  cityData: isCitiesSelector(state),
});

const mapDispatch = {
  fetchUserDate: citiesActions.fetchUserDate,
};

export default connect(mapState, mapDispatch)(Weather);
