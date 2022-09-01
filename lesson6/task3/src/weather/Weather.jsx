import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Сities from '../Сities';
import * as citiesActions from './weather.actions';
import { isCitiesSelector } from './weather.selectors';

const Weather = ({ cityData, getWeatherData }) => {
  if (!cityData) {
    getWeatherData();
    return null;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cityData.map(city => (
          <li className="city" key={city.id}>
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
          // <Сities key={city.id} {...city} />
        ))}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
  cityData: PropTypes.array,
};

Weather.defaultValue = {
  cityData: null,
};

const mapState = state => ({
  cityData: isCitiesSelector(state),
});

const mapDispatch = {
  getWeatherData: citiesActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
