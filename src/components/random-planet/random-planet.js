import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

class RandomPlanet extends Component {

  SwapiService = new SwapiService;

  state = {
    planet: {},
    loading: true
  }  

  componentDidMount() {
    console.log('Did mounted'); 
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000)
  }

  componentWillUnmount() {
    console.log('component will unmounted')
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    console.log('update');
    const id = Math.floor(Math.random()*19);
    // const id = 20;
    this.SwapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    console.log('render');
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet = { planet } /> : null;

    return (
      <div className='random-planet jumbotron rounded'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
  
}

export default RandomPlanet;

const PlanetView = ({ planet  }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
       <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}


