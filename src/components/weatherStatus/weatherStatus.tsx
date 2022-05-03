import './weatherStatus.css'
import axios from "axios";
import { ipApi, weatherApi } from '../../services/services';
import React, { useEffect, useState } from 'react';



function WeatherStatus() {

    useEffect(() => {
        setLoading(true);
        loadingHandler()
        getDataIp()
        setLoading(false)
        }, []);

      const [lat, setLatitud] = useState('')
      const [long, setLongitud] = useState('')
      const [loading, setLoading] = useState(true)
      const [loadingText, setLoadingText] = useState('')
      const [temp, setTemp] = useState([])


    const getDataIp = async () => {
        const resp = await ipApi.get('https://api.ipgeolocation.io/ipgeo?apiKey=471a22d27b1d4efcacf31cd2747cde65')
        console.log(resp)
        setLatitud(resp.data.latitude)
        setLongitud(resp.data.longitude)
        console.log(long)
        console.log(lat)
        const respWeather = await ipApi.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=bc289ad8918259f14fa5c679a7760349')
        console.log(respWeather.data)
    }

    const loadingHandler = () => {
        if (loading) {
            return setLoadingText('Loading')
        } else {
            return setLoadingText('')
        }
    }


    const tesTemp = () => {
        console.log(lat)
        console.log(long)
        temp.map((resp: any) => {
            console.log(resp)
        })
    }


        return (
            <div className="bg-home">
                <h1 onClick={tesTemp}>{loadingText}</h1>
                <button>Test data</button>
            </div>
        );


}

export default WeatherStatus;