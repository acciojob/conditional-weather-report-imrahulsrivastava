import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  return (
    <div className="weather-display">
      <p style={{ color: temperature > 20 ? "red" : "blue" }}>
        Temperature: {temperature}
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
