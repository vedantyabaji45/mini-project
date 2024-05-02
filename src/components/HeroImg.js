import "./HeroImgStyles.css";
import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt='imgh'/>
        </div>
        <div className="content">
            <p>Hi , I'm a FREELANCER</p>
            <h1>React Developer.</h1>
        </div>
        

    </div>
  )
}

export default HeroImg