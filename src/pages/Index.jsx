import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import Aboutme from '../components/Aboutme'
import Projects from '../components/Projects'
import BackgroundEducation from '../components/BackgroundEducation'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import { useMediaQuery } from 'react-responsive';




function Index() {

  return (
    <div>
        <Navbar/>
        <Home/>
         <Aboutme/>
    
        <BackgroundEducation/> 
      <Skills/> 
       {/*    <Projects/> */}
        <Footer/> 
    </div>
  )
}

export default Index