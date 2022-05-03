import './weatherStatus.css'
import axios from "axios";
import { ipApi, weatherApi } from '../../services/services';
import React, { useEffect, useState } from 'react';



function WeatherStatus() {

    const [lat, setLatitud] = useState('')
    const [long, setLongitud] = useState('')
    const [loading, setLoading] = useState(true)
    const [loadingText, setLoadingText] = useState('')
    const [temp, setTemp] = useState([])
    const [tempData, setTempData] = useState([])


    useEffect(() => {
        setLoading(true);
        loadingHandler()
        ipApi.get('https://api.ipgeolocation.io/ipgeo?apiKey=471a22d27b1d4efcacf31cd2747cde65').then(resp => {
            const latitud = resp.data.latitude;
            const longitud = resp.data.longitude;
            weatherApi.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid=bc289ad8918259f14fa5c679a7760349&units=metric').then(resp => {
                setTemp(resp.data.main);
                setTempData(resp.data.weather)
            })
        })
        setLoading(false)
        }, []);

    

    const loadingHandler = () => {
        if (loading) {
            return setLoadingText('Loading')
        } else {
            return setLoadingText('')
        }
    }


    const tesTemp = () => {
        console.log(temp)
        console.log(tempData)
        temp.map((resp: any) => {
            console.log(resp)
        })
    }


    return (
        <div className="bg-home">
            <h1>{loadingText}</h1>
            <button onClick={tesTemp}>Test data</button>
        </div>
    );


}

export default WeatherStatus;