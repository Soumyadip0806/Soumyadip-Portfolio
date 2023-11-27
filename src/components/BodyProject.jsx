import React from 'react'
import './BodyProject.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Keyboard, Navigation,Autoplay } from 'swiper/modules';
import ProjectData from '../assets/data/ProjectData';
import ProjectCard from './ProjectCard';
import { Fade } from "react-awesome-reveal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';





function BodyProject() {


  return (
    <div className='bdyProject-maincontainer'>
      <Fade direction='up' duration={1850}>
      <div className='bodyProject-titleSection'>
          <p className='subTitle'>some of my recent works</p>
          <h2 className='mainTitle'>Projects</h2>
      </div>
      </Fade>
    <div className='bdyProject-container' >

    
    <Swiper navigation={true} modules={[Autoplay, Keyboard,  Navigation]} className="mySwiper"
                      spaceBetween={0} slidesPerView={1}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      keyboard={{
                        enabled: true,
                      }}
                      breakpoints={{
                        768:{
                          slidesPerView:1,
                        },
                        1000:{
                          slidesPerView:2,
                        },
                        1100:{
                          slidesPerView:3,
                        },
                      }}
                      
                      >
                        {ProjectData.map((project,index)=>{
                            if(index >=5) return;
                            return <div> <SwiperSlide key={project.id}>
                            <ProjectCard
                              title={project.name}
                              img={project.img}
                              desc={project.desc}
                              viewLive={project.liveLink}
                              projectGithub={project.githubLink}
                              mainStack={project.mainStack}
                              more={project.name.replace(/\s+/g, '-').toLowerCase()}
                
                            />
                          </SwiperSlide></div>
                        })}
                    </Swiper>
{/*}                     
 <span className='blur blurproject'></span>
                      <span className='blur blurproject'></span>*/}
 </div>
 
 </div>



  )
}

export default BodyProject