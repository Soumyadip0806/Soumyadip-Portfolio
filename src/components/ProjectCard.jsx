import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {CgMediaLive, CgMoreO} from 'react-icons/cg';





function ProjectCard(
    {
        img,
        title,
        desc,
        viewLive,
        projectGithub,
        more,
      },



) {
return (
    <div className='prjCard'> 
      <div className='prjCard-top'>
        <img className='prjCard-image' src={img} alt='' />
      </div>
      <div className='prjCard-bottom'>
      <div className="prjCard-title">{title}</div>
            <p className="prjCard-desc">{desc}</p>
            <div className='prjCard-button-parent'>
                <Link to={projectGithub} target='_blank'><span className='cb-c1'>GitHub</span><span className='ic'><FiGithub/></span></Link>
                <Link to={viewLive} target='_blank'><span className='cb-c2'>Live</span><span className='ic'><CgMediaLive/></span></Link>
                <Link to={`/project/${more}`}><span className='cb-c3'>More</span><span className='ic'><CgMoreO/></span></Link>
            </div>
      </div>
    </div>
  )
}

export default ProjectCard;