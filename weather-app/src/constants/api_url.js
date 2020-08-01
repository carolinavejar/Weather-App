const location = "Santiago,cl";
const api_key = "58c22e7dbcc48ff7801940ea1017671b";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;