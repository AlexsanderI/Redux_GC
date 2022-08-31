import React from 'react';
import Сities from '../Сities';
import { fetchTaskList } from '../Gateway';

class Weather extends React.Component {
  state = {
    cities: [],
  };

  componentDidMount() {
    this.fetchTask();
  }

  fetchTask = () => {
    fetchTaskList().then(tasksList =>
      this.setState({
        cities: tasksList,
      }),
    );
  };

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.state.cities.map(city => (
            <Сities key={city.id} {...city} />
          ))}
        </ul>
      </main>
    );
  }
}

export default Weather;
