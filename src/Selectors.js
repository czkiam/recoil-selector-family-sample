import { selector } from "recoil";
import { cityAtom } from "./Atoms";
import { fetchWeather } from "./WeatherApi";

export const weatherSelector = selector({
  key: "getWeatherAPI",
  get: async ({ get }) => {
    const city = get(cityAtom);
    const weather = await fetchWeather(city);
    return weather.fahrenheit;
  },
});
