import './App.css';

import Navbar from './Components/NavBar/Navbar.jsx';
import MainBanner from './Components/Home/MainBanner';
import AboutBanner from './Components/About/AboutBanner';
import Skills from './Components/About/Skills';
import Gallery from './Components/Projects/Gallery';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import projectsData from './Components/Projects/projectsData';
import React, { useState,useRef } from 'react';
const allCategories = ['all', 'Web', 'Games', 'Other'];

function App() {

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);




  const [menuItems, setMenuItems] = useState(projectsData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(projectsData);
      return;
    }
    const newItems = projectsData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };



  return (
    <div className="App">

      <Navbar homRef={homeRef} projRef={projectsRef} abouRef ={aboutRef} contRef={contactRef} skiRef={skillsRef}/>
      <MainBanner ref={homeRef}/>
      <AboutBanner ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Gallery categories={categories} filterItems={filterItems} items={menuItems} ref={projectsRef}/>
      <Contact ref={contactRef} />
      <Footer/>



    </div>
  );
}

export default App;
