import React from 'react';
import './Body.css';
import {Link } from 'react-router-dom';
import CV from '../assets/data/SoumyadipCv.pdf';
import Typical from 'react-typical';
import tstImage from '../assets/images/body.jpeg';
import {FaWhatsapp,FaDownload} from 'react-icons/fa6';
import {LuGithub} from 'react-icons/lu';
import {BiLogoFacebook,BiLogoLinkedin} from 'react-icons/bi';




export default function Body() {

  return (
    <div className='mainHome'>
  <div className='container'>
      <div className='left-container'>
      <div className='home-titleSection'>
                    <p className='subTitle homesubTitle' data-aos="slide-left">Hello, It's Me</p>
                    <h2 className='mainTitle homemainTitle' data-aos="slide-right">Soumyadip Ghosh</h2>
                </div>
                <div className='home-typical'>
                  <span>And, I'm a </span>
                  <span><Typical steps={[
                    "Enthusiastic Dev ",
                    1000,
                    "AI & ML Integrator",
                    1000, 
                    "Full Stack Dev",
                    1000,
                    "A Physics Graduate",
                    1000,
                    "UI/UX Designer",
                    1000,
                    ]}loop={Infinity}/></span>
                </div>
                <p className='home-paragraph' data-aos="slide-left">Hey, I'm a web Application & Website developer. Expertiesis to create, design user-friendly and AI & ML model based websites,<Link to='/about'> and many more...</Link></p>
                <div className='home-social'>
                  <ul>
                    <li className='bds-li'><a href="https://api.whatsapp.com/send?phone=+918609900665&text=I'd like to connect with you" target='blank' rel='' ><FaWhatsapp className='socialicon s1' /></a></li>
                    <li className='bds-li'><a href='https://www.linkedin.com/in/soumyadipghosh0806' target='blank' rel='' ><BiLogoLinkedin className='socialicon s2' /></a></li>
                    <li className='bds-li'><a href='https://www.facebook.com/soumyadip.ghosh.96199' target='blank' rel='' ><BiLogoFacebook className='socialicon s3' /></a></li>
                    <li className='bds-li'><a href='https://github.com/Soumyadip0806' target='blank' rel=''  ><LuGithub className='socialicon s4' /></a></li>
                  </ul>
                </div>
                <div className='home-button'>
                  <a href={CV} download='Soumyadip Cv' className='home-cv btns'>
                      <span>Download CV <i className='bic'><FaDownload/></i> </span>
                      
                  </a>
                </div>
            </div>
            <div className='right-container' >
              <div className='right-container-design'>
                <div className='rbox'>
                    <div className='ct'>
                    <img className='ctimg' src={tstImage} alt='' data-aos="slide-right"/>
                    </div>
                </div>
              </div>
            </div>
            <div className='right-container1' >
              <div className='right-container-design1'>
                <div className='circle1'></div>
                <div className='circle1'></div>
              </div>
            </div>
    </div>
                
        </div>   
        
  )
}
