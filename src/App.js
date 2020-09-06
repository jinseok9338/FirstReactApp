import React from "react";
import "./App.css";
import WeatherEngine from "./WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Sydney" />
    </div>
  );
}

export default App;
