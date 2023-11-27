import React, { useEffect, useState } from 'react';
import './Project.css';
import {MdSearch} from 'react-icons/md';
import ProjectCard from '../components/ProjectCard';
import ProjectInfo from '../assets/data/ProjectData';

function Project() {

const [searchText, setSearchText]= useState('');

const[projectData, setProjectData]=useState(ProjectInfo);

useEffect(() => {
  if (searchText === '') return;
  setProjectData(() =>
    ProjectInfo.filter((item) =>
      item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);


const handleChangeSearchText = (e) => {
  e.preventDefault();
  setSearchText(e.target.value);
  if (!e.target.value.length > 0) {
    setProjectData(ProjectInfo);
  }
};

  return (
    <div className='project'>
        <div className='project-container'>
          <div className='project-titleSection'>
              <p className='subTitle '>some of my works</p>
              <h2 className='mainTitle '>Projects</h2>
          </div>
          <div className='project-searchBar'>
            <form>
              <input type='text'
              value={searchText}
              onChange={handleChangeSearchText}
              placeholder="Search Project Name"
              />
              <MdSearch className='project-searchIcon'/>
            </form>
          </div>
          <div className='projects-allItem'>
            {projectData.map(item =>(
              <ProjectCard
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                mainStack={item.mainStack}
                stackH={item.stackH}
                more={item.name.replace(/\s+/g, '-').toLowerCase()}
                viewLive={item.liveLink}
                projectGithub={item.githubLink}
                
              />

            ))}
          </div>
        </div>
    </div>
  )
}

export default Project