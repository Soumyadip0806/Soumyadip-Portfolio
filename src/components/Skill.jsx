import React from 'react';
import { WebAppData } from '../assets/data/SkillData';
import { OthersData } from '../assets/data/SkillData';
import { Fade,Slide } from "react-awesome-reveal";
import './Skill.css';

const Skill = () => {


  return (
    <div className='skill'>
        <Slide direction='up' duration={1800}>
        <div className='skillTitle-section' >
              <p className='subTitle '>my technical level</p>
              <h2 className='mainTitle '>Skills</h2>
        </div>
        </Slide>
        <div className='skill-mainContainer'>

        <Fade duration={2000}>
            <div className='skill-webApp'>
                <div className='skill-title'>Web Application</div>
                    <div className='skill-box'>
                            {WebAppData.map((data) =>{
                                return(
                                        <Fade cascade direction='left' duration={1900}>
                                    <div className='skill-data' >
                                        <i className='skill-icon'><img src={data.icon} alt='' className='skill-icon-image'/></i>
                                        <div className='skill-content'>
                                            <div className='skill-name'>{data.name}</div>
                                            <div className='skill-level'>{data.level}</div>
                                        </div>
                                    </div>
                                    </Fade>
                                )
                            })}

                    </div>
            </div>
            </Fade>

            <Fade duration={2000}>
            <div className='skill-others'>
                <div className='skill-title'>AI and Others</div>
                    <div className='skill-box'>
                            {OthersData.map((data) =>{
                                return(
                                    <Fade cascade direction='right' duration={1900}>
                                    <div className='skill-data' >
                                        <i className='skill-icon'><img src={data.icon} alt='' className='skill-icon-image'/></i>
                                        <div className='skill-content'>
                                            <div className='skill-name'>{data.name}</div>
                                            <div className='skill-level'>{data.level}</div>
                                        </div>
                                    </div>
                                    </Fade>
                                )
                            })}

                    </div>
            </div>
            </Fade>


        </div>
    </div>
  )
}

export default Skill