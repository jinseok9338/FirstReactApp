import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const Api_key = "927e7b0d45b6bbd9709a044b66e6a1ac";

  const getWeather = async (query) => {
    setQuery("");
    setLoading(true);
    try {
      const api_response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=` +
          Api_key
      );
      const response_JSON = await api_response.json();
      setWeather({
        temp: response_JSON.main.temp,
        city: response_JSON.name,
        condition: response_JSON.weather[0].main,
        country: response_JSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault(); //prevent the default action,which is change value(city) onChange when the button is clicked it calls handleSearch function then date().then function gets executed
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!
          <br />
          <button onClick={() => setError(false)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherEngine;
