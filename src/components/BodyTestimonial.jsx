import React  from 'react';
import './BodyTestimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,  Pagination,Keyboard,  } from 'swiper/modules';
import BodyTestimonialItem from'./BodyTestimonialItem';
import TestimonialData from '../assets/data/TestimonialData';
import { Fade } from "react-awesome-reveal";

import 'swiper/css';
import 'swiper/css/pagination';


function BodyTestimonial() {



  return (
    <div className='bodyTestimonial'>
      <div className='testimonial-container'>
        <Fade direction='up' duration={1850}>
        <div className='testimonial-titleSection' >
            <p className='subTitle'>see what out peoples say about me</p>
            <h2 className='mainTitle'>Testimonial</h2>
        </div>
        </Fade>
        <Fade duration={1850}>
        <div className='testimonil-slider'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          
          dynamicBullets: true,
        }}


        modules={[Autoplay,Keyboard,  Pagination]}
        className="mySwiper"
      >
        {TestimonialData.map((testimonial,index)=>{
                            if(index >=25) return;
                            return <div className='bodyTestimonial-item'>
                             <SwiperSlide key={testimonial.id}>
                            <BodyTestimonialItem
                              name={testimonial.name}
                              img={testimonial.img}
                              about={testimonial.about}
                              profile={testimonial.profile}
                              institute={testimonial.institute} 
                            />
                          </SwiperSlide></div>
                        })}
                      
        </Swiper>
        </div>
        </Fade>



        <span className='blur blurtesti'></span>
        <span className='blur blurtesti'></span>
      </div>
    </div>
  )

  
}

export default BodyTestimonial