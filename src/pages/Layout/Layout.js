import React from 'react'
// import { Outlet } from 'react-router-dom'
import Navigation from '../../components/navigation/Navigation';
import About from '../About/About';
import Work from '../Work/Work';
import Home from '../Home/Home';
import BarChart from '../../components/barchart/Barchart';
// import Colorful from '../../components/colorful/Colorful';


function Layout() {
  return (
    <div>
      <Navigation/>
      <div id="section1"  >
        <Home/>
      </div>
      <div id="section2" >
    <About />
      </div>
      <div id="section3" >
        <Work/>
      </div>
      {/* <Colorful/> */}
      <BarChart/>
  
    </div>
  )
}

export default Layout