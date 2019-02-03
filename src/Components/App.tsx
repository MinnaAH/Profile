import React from "react";
import Navbar from './Nav';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Work from './Work';

export default class App extends React.Component <{}>{
  render(){
      return(
        <div>
          <Navbar />
            <div id="About">
              <About />
            </div>
            <div id="Education">
              <Education />
            </div>
            <div id="Skills">
              <Skills />
            </div>
            <div id="Work">
              <Work />
            </div>
        </div>
      );
  }
}
