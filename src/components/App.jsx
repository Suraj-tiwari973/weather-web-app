import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import Weather from './Weather';
import NotFound from './NotFound';
import Navbar from './Navbar';
import '../css/App.css';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const checkWeather = async (city) => {
    const api_key = "757d474a7af98a9db4e7ba90e3d3b9d8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
      const response = await axios.get(url);
      if (response.data.cod === '404') {
        setError(true);
        setWeather(null);
      } else {
        setWeather(response.data);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setWeather(null);
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <ThemeProvider>
      <div className="nav-container">
      <Navbar />
      </div>
      <div className="container">
        <div className="content">
          
          <Form checkWeather={checkWeather} />
          {error && <NotFound />}
          {weather && <Weather weather={weather} />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
