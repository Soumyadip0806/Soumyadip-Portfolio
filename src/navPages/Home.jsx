import React from 'react';
import Body from '../components/Body';
import BodyAbout from '../components/BodyAbout';
import BodyProject from '../components/BodyProject';
import Qualification from '../components/Qualification';
import Service from '../components/Service';
import Skill from '../components/Skill';
import BodyTestimonial from '../components/BodyTestimonial';
import BodyContact from '../components/BodyContact';


function Home() {
  return (
    <>
        <Body/>
        <BodyAbout/>
        <Qualification/>
        <Skill/>
        <BodyProject/>
        <Service/>
        <BodyTestimonial/>
        <BodyContact/>
    </>
  )
}

export default Home