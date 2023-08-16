import React from 'react'
import Search from './Search'
import styles from "./Body.module.css"
import WeatherIcon from './WeatherIcon'
function Body(props) {
    const icon=props.icon
    const handlecityChange=props.handlecityChange;
    const feelsLike=props.feelsLike
    const desc=props.desc
    const humidity=props.humidity
    
    console.log(icon)
  return (
    <div className={styles.container}>
      <div className={styles.searching}>
        <Search icon={icon} handlecityChange={handlecityChange}/>
      </div>
      <WeatherIcon icon={icon} feelsLike={feelsLike} desc={desc} humidity={humidity}/>
    </div>
  )
}

export default Body
