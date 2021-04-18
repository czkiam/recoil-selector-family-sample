import axios from "axios";

export const fetchWeather = async (location) => {
  const url = `http://localhost:3080/api/v1/init?_${Date.now()}`;

  const res = await axios.get(url);
  //   .then(res => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   })
  const token = res.data.token;

  return await new Promise(async (resolve, reject) => {
    let weather = {};

    weather.token = token;

    const parsedLocation = location.toLowerCase();

    switch (parsedLocation) {
      case "new york":
        weather.fahrenheit = "76";
        break;
      case "anchorage":
        weather.fahrenheit = "46";
        break;
      case "paris":
        weather.fahrenheit = "63";
        break;
      case "ham ka ling":
        weather.fahrenheit = "111";
        break;
      default:
        weather.fahrenheit = "0";
    }
    setTimeout(() => {
      resolve(weather);
      console.log(JSON.stringify(weather));
    }, 1000);
  });
};
