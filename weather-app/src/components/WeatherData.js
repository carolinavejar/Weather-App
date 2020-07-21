import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
// import WeatherLocation from './WeatherLocation';

const WeatherData = ()=> (
    <div>
        <WeatherTemperature  temperature="18" weatherState={''} />
        <WeatherExtraInfo  humedity={80} wind={"10 m/s"}/>       
    </div>
    
);

export default WeatherData;