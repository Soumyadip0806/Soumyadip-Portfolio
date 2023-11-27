import React from 'react';
import './QualificationList.css';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {Slide } from "react-awesome-reveal";

function QualificationList(

  {
    id,title,year,instituteName,universityName,subject,cgpa,
  }

) {

  return (
    <Slide direction='up' duration={1600} >
    <div className='qualification' key={id} >
          <div className='qualification-box'>
            <div className='qualification-content'>
              <div className='q-border'>
                <div className='qualification__content'>
                  <div className='qualification-year'><i><FaRegCalendarAlt/></i>{year}</div>
                  <h2 className='qualification-degree'>{title}</h2>
                  <span className='qualification-subject'>{subject}</span>
                  <div className='qualification-institute'>{instituteName}</div>
                  <div className='qualification-university'>{universityName}</div>
                  <span className='qualification-cgpa'>{cgpa}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      </Slide>
  )
}

export default QualificationList