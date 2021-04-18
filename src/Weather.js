import React from "react";
import { useRecoilValue } from "recoil";
import { weatherSelector } from "./Selectors";

export default function Weather() {
  const currentWeather = useRecoilValue(weatherSelector);

  return (
    <div>
      <p>Weather: {currentWeather}</p>
    </div>
  );
}
