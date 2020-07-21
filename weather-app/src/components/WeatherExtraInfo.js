import React from 'react';

const WeatherExtraInfo = ({humedity, wind}) => (
    <div>
        <span>{`${humedity} % -`}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;