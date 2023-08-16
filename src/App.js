import { useState,useEffect } from 'react';
import './App.css';
import Body from './components/Body';

function App() {
  const [weatherIcon,setweatherIcon]=useState("")
  const [feelsLike,setfeelsLike]=useState("0")
  const [humidity,sethumidity]=useState("0")
  const [desc,setdesc]=useState("humid")
  const [city,setCity]=useState("Siliguri")
  const appid="95deec9ca7f3b917c184d625cce26604"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
    fetch(url).then((response)=>{
      return (response.json())
    }).then((response)=>{
      // console.log(response.weather[0].icon)
      setweatherIcon(response.weather[0].icon)
    })
    useEffect(()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
      fetch(url).then((response)=>{
        return (response.json())
      }).then((response)=>{
        // console.log(response.weather[0].icon)
        setweatherIcon(response.weather[0].icon)
        setfeelsLike(response.main.feels_like)
        sethumidity(response.main.humidity)
        setdesc(response.weather[0].description)
        // console.log(response.weather[0].description)
      })
    })
    const handlecityChange=(cityName)=>{
      setCity(cityName)
      // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    }
    
  return (
    <div className="App">
      <h1 className='heading'>My Weather App</h1>
      <Body icon={weatherIcon} feelsLike={feelsLike} humidity={humidity} desc={desc} handlecityChange={handlecityChange}/>
    </div>
  );
}

export default App;
