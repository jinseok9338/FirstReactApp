import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 400;
  `;

  var temp = props.temp;
  var condition = props.condition;

  return (
    <>
      <Temp>{temp}°C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
