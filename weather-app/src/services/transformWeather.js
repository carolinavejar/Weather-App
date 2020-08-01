import convert from 'convert-units';
import {
    SUN, 
} from '../constants/weathers';

const getTemp = kelvin => {
    return parseInt(convert(kelvin).from("K").to("C").toFixed(0), 0);
}

const getWetherData = wheather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWetherData();
    const data  = {
        temperature: getTemp(temp),
        humidity,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;