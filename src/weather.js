import React, { useEffect, useState} from 'React';
import axois from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
const [weatherData, setweatherData] = useState(null);
const fetchData = async () => {
    try {
        const response = await axois.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={62a970fe8b3a0b1d02719076a3ebafab}`);
        setweatherData(response.data);
    }
    catch (error) {
        console.error(error);
    };
};
useEffect(() => {
    fetchData();
}, []);

const handleInputChange = (e) => {
    setCity(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
};
return(
<div>
    <form onSubmit={handleSubmit}>
        <input 
            type= "text"
            placeholder="Enter city name"
            value= {city}
            onChange={handleInputChange}
        />
        <button type='submit'>Get weather</button>
    </form>
    {weatherData ? (
        <>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Feels like: {weatherData.main.feels_like}°C</p>
        <p>Humidity : {weatherData.main.humidity}%</p>
        <p>Pressure : {weatherData.main.pressure}</p>
        <p>Wind Speed : {weatherData.main.wind.speed}m/s</p>
        </>
    ) : (<p>Loading weather data.....</p>)
    }
</div>
);
};

export default Weather;