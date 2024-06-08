import React, { useState } from 'react';

const Form = ({ checkWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    checkWeather(city);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-box"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="searchBtn" type="submit">Search</button>
    </form>
  );
};

export default Form;

//🔍