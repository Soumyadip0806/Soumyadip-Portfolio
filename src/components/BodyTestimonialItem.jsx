import React from 'react';
import './BodyTestimonialItem.css';
import {FaQuoteLeft} from 'react-icons/fa';

function BodyTestimonialItem(
  {
    img,
    name,
    profile,
    institute,
    about  
  }
) {
  return (
    <div className='testimonialCard-container'>
        <div className='testimonialCard-box'>
            <div className='testimonialCard-imgBox'>
              <img src={img} alt=''/>
            </div>
            <p className='testimonialCard-about'>{about}</p>
            <div className='testimonialCard-bottom'>
              <div className='testimonialCard-bottom-left'>
                  <h4 className='t-name'>{name}</h4>
                  <h4 className='t-profile'>{profile}</h4>
                  <h4 className='t-ins'>{institute}</h4>
              </div>
              <div className='testimonialCard-bottom-right'><i className='testimonialCard-bottom-right-icon'><FaQuoteLeft/></i></div>
            </div>
        </div>
      </div>
  )
}

export default BodyTestimonialItem