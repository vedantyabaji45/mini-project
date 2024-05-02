import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I'm React Front-End Developer . I create responsive websites for My clients</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="r1"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="r2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent