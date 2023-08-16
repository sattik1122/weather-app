import React,{useState,useEffect} from 'react'
import styles from "./Search.module.css"
function Search(props) {
  const icon=props.icon
  const handlecityChange=props.handlecityChange
  const [inputvalue,setinputvalue]=useState("")
  const handleonChange=(event)=>{
    setinputvalue(event.target.value)
  }
  const handleClick=(e)=>{
    e.preventDefault();
    handlecityChange(inputvalue)

  }
  useEffect(()=>{
    setinputvalue("")
  },[icon])
  return (
    <div className={styles.container}>
      <form action="">
        <input type="text" name="name" value={inputvalue} onChange={handleonChange}/>
        <button className={styles.button} type="button" onClick={handleClick}>Search</button>
      </form>
    </div>
  )
}

export default Search
