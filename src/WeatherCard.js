import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="card">
      <div className="location">
        <h1 className="city">Sydney</h1>
        <h3 className="country">AD</h3>
      </div>
      <img className="icon" src="./img/partly_cloudy.png" alt="Weather Icon" />
      <h1 className="temp">20°C</h1>
      <h3 className="condition">Clouds</h3>
    </div>
  );
};

export default WeatherCard;
