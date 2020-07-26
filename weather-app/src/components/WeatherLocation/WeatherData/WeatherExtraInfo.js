import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humedity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad ${humedity} % -`}</span>
        <span className="extraInfoText">{`Vientos ${wind} `}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humedity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;