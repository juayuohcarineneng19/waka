import React from 'react'
import Styles from "./HeroStyles.css"

function Hero(props) {
  return (
    <div className={props.cName}>
        <img src={props.heroImg} alt="hero-img" className='backImg' />

        <div className="heroText">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass} >
            {props.buttonText}
          </a>
        </div>
    </div>
  )
}

export default Hero