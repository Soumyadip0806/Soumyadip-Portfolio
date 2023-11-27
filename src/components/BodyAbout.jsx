import React from 'react'
import './BodyAbout.css'
import {Link } from 'react-router-dom'
import BodyAboutImage from '../assets/images/bdabout.jpeg'
import { Fade } from "react-awesome-reveal";

function BodyAbout() {

  return (
    <div className='bodyAbout'>
            <Fade duration={1850} direction='up'>
            <div className='bodyAbout-titleSection'>
                <p className='subTitle bdyaboutsub'>Let me introduce myself</p>
                <h2 className='mainTitle'>About Me</h2>
            </div>
            </Fade>

        <div className='bodyAbout-container'>
        <Fade duration={1850}>
            <div className='bodyAbout-left'>
                <img className='bodyAbout-image' src={BodyAboutImage} alt='' />
            </div>
        </Fade>
            <div className='bodyAbout-right'>
                <Fade duration={1850} direction='up'>
                <p className='bodyAbout-paragraph'>I'm a web developer with  a passion for frontend development and design. I'm currently a 2nd year (Master Of Science) student at Rani Rashmoni Green University pursuing a degree in Computer Science with a major Artificial Intelligence & Machine Learning, <Link to='/about'> and many more...</Link></p>
                </Fade>
                <div className='bodyAbout-button'>
                <Fade duration={1850} direction='up'>
                    <Link to='https://github.com/Soumyadip0806' target='__blank' className='bodyabt-github btns'><span>Github</span></Link>
                    <Link to='/about' className='bodyabt-readMore btns'><span>Read More</span></Link>
                    </Fade>
                </div>
            </div>

        </div>
     </div>
  )

}

export default BodyAbout