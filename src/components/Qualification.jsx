import React, { useEffect, useState } from 'react'
import './Qualification.css'
import { QualificationData, QualificationNavList } from '../assets/data/QualificationData';
import QualificationList from './QualificationList';
import { Fade, Slide } from "react-awesome-reveal";

const Qualification = () => {


const [item, setItem] = useState({name: 'Education'});
const [data, setData] = useState([]);
const [active, setActive] = useState(0);

useEffect(() => {
    const newItem = QualificationData.filter((data)=>{
        return data.category === item.name;
    });
    setData(newItem);
}, [item]
);

const handleClick = (x,index)=>{
    setItem({name : x.target.textContent})
    setActive(index)
};


  return (

    <div className='qualification-main'>
        <Fade direction='up' duration={1850}>
        <div className='bodyqualification-titleSection' >
            <p className='subTitle bdyqualificationsub'>my personal journey</p>
            <h2 className='mainTitle bdyqualificationmain'>Qualification</h2>
        </div>
        </Fade>
        <div className='educationNav'>
        <Slide direction='up'  duration={1900}>
            <div className='edu__filters' >
                {QualificationNavList.map((item, index) => {
                    return (
                        <span 
                            onClick={(x)=>{
                            handleClick(x,index);
                            }} 
                            className={`${active === index ? 'active__work' : ''}edu__items`} key={index}>
                            <i className='item-icons'>{item.icon}</i>{item.name}
                        </span>   
                    )
                })}
            </div>
            </Slide>
            <div className='educationNav-content' >
            {data.map((item) =>{
                return(
                <span>
                    <QualificationList item={item} key={item.id}
                    title = {item.title}
                    year = {item.year}
                    instituteName = {item.instituteName}
                    universityName = {item.universityName}
                    subject = {item.subject}
                    cgpa = {item.cgpa} 
                    />
                </span>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Qualification;
