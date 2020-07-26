import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN, 
    WINDY
} from '../../constants/weathers';

const data  = {
    temperature: 50,
    weatherState: SUN,
    humedity: 10,
    wind: '10 m/s'
}

const data2  = {
    temperature: 44,
    weatherState: WINDY,
    humedity: 10,
    wind: '1313 m/s'
}

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: 'Puerto Mont',
            data
        }
    }

    handleUpdateClick = ()=>{
        console.log("Actualizado");
        this.setState({
            city: 'Valparaiso',
            data: data2
        })
    }

    render() {
        const {city, data} = this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>  
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
    
};

export default WeatherLocation;