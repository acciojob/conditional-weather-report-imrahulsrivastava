import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  return (
    <div className="weather-display">
      <span
        style={{
          color: temperature > 20 ? "red" : "blue",
          marginRight: "10px",
        }}
      >
        Temperature: {temperature}
      </span>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
