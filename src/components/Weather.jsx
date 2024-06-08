import React from 'react';
import DateTime from './DateTime';
import '../css/App.css';

const Weather = ({ weather }) => {
  const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

  const getWeatherImage = (main) => {
    switch(main) {
      case 'Clouds':
        return "/assets/cloud.png";
      case 'Clear':
        return "/assets/clear.png";
      case 'Rain':
        return "/assets/rain.png";
      case 'Mist':
        return "/assets/mist.png";
      case 'Snow':
        return "/assets/snow.png";
      case 'Dust':
            return "/assets/dust.png";
      case 'Not Found':
            return "/assets/404.png";
      case 'Haze':
            return "/assets/haze.png";
      default:
        return "";
    }
  };

  return (
    <div className="weather-body">
      <img src={getWeatherImage(weather.weather[0].main)} alt={weather.weather[0].main} className="weather-img" />
      <div className="weather-box">
        <div className="temperature">{kelvinToCelsius(weather.main.temp)}°C</div>
        <div className="description">{weather.weather[0].description}</div>
      </div>
      <DateTime/>
      <div className="weather-details">
        <div className="humidity">
          <div className="text"><span>{weather.main.humidity}%</span> Humidity</div>
        </div>
        <div className="wind"> 
          <div className="text"><span>{weather.wind.speed} Km/H</span> Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
