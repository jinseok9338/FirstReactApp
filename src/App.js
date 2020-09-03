import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const api_response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=927e7b0d45b6bbd9709a044b66e6a1ac"
    );
    const response_JSON = await api_response.json();
    return response_JSON;
  };

  data().then((response) => {
    console.log(response.main.feels_like);
  });

  return (
    <div className="App">
      <WeatherCard temp={13} condition="Rain" city="Seattle" country="US" />
      <WeatherCard temp={10} condition="Mist" city="Seoul" country="KR" />
      <WeatherCard temp={-20} condition="Clear" city="London" country="GB" />
    </div>
  );
}

export default App;
