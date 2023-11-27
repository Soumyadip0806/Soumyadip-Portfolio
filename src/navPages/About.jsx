import React from 'react';
import {FaDownload} from 'react-icons/fa6';
import BodyAboutImage from '../assets/images/about.jpg';
import Qualification from '../components/Qualification';
import CV from '../assets/data/SoumyadipCv.pdf';
import Skill from '../components/Skill';
import './About.css';
import { Fade } from "react-awesome-reveal";



function About(){



  return (
   <div className='about'>
      <Fade duration={1800}>
      <div className='about-titleSection'>
          <p className='subTitle '>let me introduce myself</p>
          <h2 className='mainTitle '>About me</h2>
      </div>
      </Fade>
    {/* Main Container */}

    <div className='about-container'>

      {/* Container 1  : About Me: */}

      <div className='about-container-1'>
        <div className='about-container-1-left'>
        <Fade duration={1800} direction='up'>
            <p className="about-c1-subheading">
             Hi, I am <span>Soumyadip Ghosh</span>
            </p>
            <h2 className="about-c1-heading">A Web developer</h2>
          </Fade>
            <div className="about-c1-info">
            <Fade duration={2000}>
                <p className='about-c1-para'>
                  I am from Arambagh, West Bengal, India. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others. I aspire toward 
                  a career that will allow me to channel my creativity through crafting 
                  beautiful software and engaging experiences.
                  <br />
                  <br />
                  I'm currently a 2nd year (Master Of Science) student
                   at Rani Rashmoni Green University pursuing a degree in Computer 
                   Science with a major Artificial Intelligence & Machine Learning, 
                   and minor in Data Science & other core subjects.
                  <br />
                  <br />
                  I started coding since I was in college. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </p>
                </Fade>
              </div>
              <Fade duration={2000} >
            <div className='about-c1-button'>
                <a href={CV} download='Soumyadip CV' className='about-cv btns btn'>
                      <span>Download CV <i className='aic'><FaDownload/></i></span> 
                </a>
            </div>
            </Fade>
        </div>

        <div className='about-container-1-right'>
        <div className='about-c1-image'>
                <img className='about-image' src={BodyAboutImage} alt='' />
            </div>
        </div>
      </div>

      {/* Container 2 : My Educational Information */}

      <div className='about-container-2'>
          <Qualification/>  
      </div> 

      {/* Container 3 : My Skills */}

      <div className='about-container-3'>
        <Skill/>
      </div>
             
    </div>
   </div>
  )
}

export default About