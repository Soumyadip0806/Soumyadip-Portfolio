import React from 'react';
import {Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import './BodyContact.css';


function BodyContact() {

  return (
    <div className='bodyContact'>
      <Fade duration={1200}>
        <div className='bodyContact-container'>
            <div className='bodyContact-title'>
                <Fade direction='up' duration={1800}>
                <p className='subTitle bdcontactSub'  > have a project in mind</p>
                <h2 className='bdyContactTitle'>Let me help you</h2>
                </Fade>
                <Fade  duration={1850}>
                <Link  to='/contact' className='body-contact btns btn'><span>Contact Now</span></Link>
                </Fade>
            </div>
        </div>
        </Fade>

    </div>
  )
  


}

export default BodyContact;