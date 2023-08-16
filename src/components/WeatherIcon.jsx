import React from 'react'
import styles from "./WeatherIcon.module.css"
function WeatherIcon(props) {
    const icon=props.icon
    const feelsLike=props.feelsLike
    const humidity=props.humidity
    const desc=props.desc
    console.log(desc)
  return (
    <div className={styles.container}>

      
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <div className={styles.box}>
          <p className={styles.feels}>feels like- {feelsLike}°C</p>
          <p className={styles.humidity}>humidity- {humidity}</p>
          <p className={styles.description}>description- {desc}</p>
      </div>
      
    </div>
  )
}

export default WeatherIcon
