import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather  from'./../../services/transformWeather';
import {api_weather} from '../../constants/api_url';

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: 'Puerto Mont',
            data :  null
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(nextProps, nextState){
        console.log("componentDidUpdate");
    }   
    
    handleUpdateClick = ()=>{
        fetch(api_weather).then( resolve => {
            return resolve.json()
        }).then(data => {
            console.log("Response handleUpdateClick");
            const newWeather = transformWeather(data);
            console.log(newWeather)
            this.setState({
                data: newWeather
            })
        });
    }

    render() {
        console.log("render");
        const {city, data} = this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ? 
                <WeatherData data={data}></WeatherData>  : 
                <CircularProgress size={50} />
            }
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
    
};

export default WeatherLocation;