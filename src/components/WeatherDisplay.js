import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  return (
    <>
      <p className="weather-display">
        <span
          style={{
            color: temperature > 20 ? "red" : "blue",
            marginRight: "10px",
          }}
        >
          Temperature: {temperature}
        </span>
      </p>
      <p>Conditions: {conditions}</p>
    </>
  );
};

export default WeatherDisplay;
