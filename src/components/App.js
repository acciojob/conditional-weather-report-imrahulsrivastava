import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay.js";
import "./../styles/App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    conditions: "",
  });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeatherData(weatherInput);
  }, []);

  return (
    <div className="app">
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
