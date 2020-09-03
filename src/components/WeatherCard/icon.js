import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 60%;
    height: 60%;
  `;

  var icon = "";

  switch (props.condition) {
    case "Clear":
      icon = "http://openweathermap.org/img/wn/01d@2x.png";
      break;

    case "Clouds":
      icon = "http://openweathermap.org/img/wn/02d@2x.png";
      break;

    case "Rain":
      icon = "http://openweathermap.org/img/wn/10d@2x.png";
      break;

    case "Thunderstorm":
      icon = " http://openweathermap.org/img/wn/11d@2x.png";
      break;

    case "Drizzle":
      icon = "http://openweathermap.org/img/wn/09d@2x.png";
      break;

    case "Snow":
      icon = "http://openweathermap.org/img/wn/13d@2x.png";
      break;
    case "Mist":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;
    case "Smoke":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    case "Haze":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    case "Dust":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    case "Fog":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    case "Sand":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    case "Ash":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    case "Squall":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    default:
      break;
  }
  return <Icon className="icon" src={icon} alt="Weather Icon" />;
};
export default Icon;
