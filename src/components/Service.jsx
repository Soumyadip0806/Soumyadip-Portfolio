import React, { useState} from 'react';
import './Service.css';
import {ServiceData} from '../assets/data/ServiceData';
import {BsArrowRight} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import { Fade} from "react-awesome-reveal";



const Service = () => {



const [toggleState, setToggleState] =useState(0);
const toggleTab =(index) =>{
    setToggleState(index);
}



  return (
    <div className='service'>
            <Fade duration={1800} direction='up'>
            <div className='service-titleSection' >
                <p className='subTitle serviceSub'>whAt i offer</p>
                <h2 className='mainTitle serviceMain'>Services</h2>
            </div>
            </Fade>
        <Fade duration={1750} direction='up'>
        <div className='service-container'>

        {/* Main Content */}

        {ServiceData.map((item) =>{
            return(
                <div className='service-content' key={item.id}  >
                <div>
                    <i className='service-icon'><img src={item.icon} alt='' className='service-icon-image'/></i>
                    <div className='service-title'>{item.service_title_1}<br/>{item.service_title_2}</div>
                </div>
                <span className='service-button'  onClick={()=> toggleTab(item.id)}>View More...<i className='service-viewMore'><BsArrowRight/></i></span>

                <div className={toggleState === item.id ? 'service-model active-model': 'service-model'} >
                <div className='service-model-content' >
                    <i className='service-model-close'onClick={()=>toggleTab(0)}><MdClose/></i>
                    <h3 className='service-model-title'>{item.service_title_1} {item.service_title_2}</h3>
                    <p className='service-model-description'>
                        {item.service_model_description}
                    </p>
                    <ul className='service-model-allservices'>
                        <li className='service-model-services'>
                            <i className='sm-info'>{item.lIcon_1}</i>
                            <p className='service-model-info'>{item.li_1}</p>
                        </li>
                        <li className='service-model-services'>
                            <i className='sm-info'>{item.lIcon_2}</i>
                            <p className='service-model-info'>{item.li_2}</p>
                        </li>
                        <li className='service-model-services'>
                            <i className='sm-info'>{item.lIcon_3}</i>
                            <p className='service-model-info'>{item.li_3}</p>
                        </li>
                        <li className='service-model-services'>
                            <i className='sm-info'>{item.lIcon_4}</i>
                            <p className='service-model-info'>{item.li_4}</p>
                        </li>
                        <li className='service-model-services'>
                            <i className='sm-info'>{item.lIcon_5}</i>
                            <p className='service-model-info'>{item.li_5}</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

                )
            })}

        </div>
        </Fade>
</div>
  )
}

export default Service