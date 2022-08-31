import React from 'react';

const Сities = ({ temperature, name }) => (
  <>
    <li className="city">
      <span className="city__name">{name}</span>
      <span className="city__temperature">{temperature} F</span>
    </li>
  </>
);

export default Сities;
