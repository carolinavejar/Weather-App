import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

import './styles.css';

const WeatherData = ( { data : { temperature, weatherState, humedity, wind} } ) =>  (
    <div className="weatherDataCont">
           <WeatherTemperature 
            temperature= {temperature}
            weatherState={weatherState} 
        />
        <WeatherExtraInfo  
            humedity={humedity}
            wind={wind}
        />       
    </div>
);

WeatherData.PropTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number,
        weatherState: PropTypes.string.isRequired,
        humedity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
};

export default WeatherData;