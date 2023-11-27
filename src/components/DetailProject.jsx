import React from 'react';
import './DetailProject.css';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {CgMediaLive} from 'react-icons/cg';
import ProjectData from '../assets/data/ProjectData'

const DetailProject = () => {

let {projectName} = useParams();
const item = ProjectData.find((project)=>project.name.replace(/\s+/g, '-').toLowerCase()===projectName);


  return (
    <div className='detailProject'>
        <div className='detailProject_mainContainer'>
            <div className={item.class}>
                <img className='detailProject-image' src={item.img} alt='' />
            </div>
            <div className='detailProject_bottom'>
              <div className='detailProject_header'>{item.name}</div>
              <span className='detailProject_type'>{item.type}</span>
              <p className='detailProject_desc'>{item.desc}</p>

              <div className='detailProject_stack commonDp'>Stack :  
              {item.mainStack.map(function(stack) {
              return (<span className='detailProject_data-items dpsti'> {stack}</span>)})}
              </div>

              <div className='detailProject_client commonDp'>Client : <span className='detailProject_data-items'>{item.client}</span></div>
              <div className='detailProject_date commonDp'>Date : <span className='detailProject_data-items'>{item.date}</span></div>
              <div className='detailProject_buttons'>
                  <Link to={item.githubLink} target='_blank'><span className='dp-b1'>GitHub</span><span className='dpIcon'><FiGithub/></span></Link>
                  <Link to={item.liveLink} target='_blank'><span className='dp-b2'>Show Live</span><span className='dpIcon'><CgMediaLive/></span></Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DetailProject