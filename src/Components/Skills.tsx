import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Skills.css';

export default class Skills extends React.Component <{}>{
  render(){
      return(
          <div className="Skills">
              <br />
              <br />
              <h1> Skills</h1>
              <div className="div-large">
              <Grid container spacing={8}>
                  <Grid item xs={3} className="Border">
                    <h3>Programming Languages</h3>
                    <p>C++<br/>HTML<br/>CSS<br/>SQL<br/>PHP<br/>React<br/>C#<br/>Java</p>
                  </Grid>
                  <Grid item xs={3} className="Border">
                    <h3>Electronics</h3>
                    <p>Circuit Board Design with Altium Designer and Eagle<br/>Schematic Diagram desing<br/>
                    Microprocessors<br/>Testing</p>
                  </Grid>
                  <Grid item xs={3} className="Border">
                    <h3>IT</h3>
                    <p>Microsoft environmet<br/>Ubuntu environment<br/>Microsoft Office softwares</p>
                  </Grid>
                  <Grid item xs={3} className="Border">
                    <h3>Languages</h3>
                    <p>Finnish - native language<br/>English - fluent</p>
                  </Grid>
              </Grid>
              </div>
              <div className="div-small">
              <Grid container spacing={8}>
                  <Grid item xs={6} className="Border">
                    <h3>Programming Languages</h3>
                    <p>C++<br/>HTML<br/>CSS<br/>SQL<br/>PHP<br/>React<br/>C#<br/>Java</p>
                  </Grid>
                  <Grid item xs={6} className="Border">
                    <h3>Electronics</h3>
                    <p>Circuit Board Design with Altium Designer and Eagle<br/>Schematic Diagram desing<br/>
                    Microprocessors<br/>Testing</p>
                  </Grid>
              </Grid>
              <Grid container spacing={8}>
              <Grid item xs={6} className="Border">
                    <h3>IT</h3>
                    <p>Microsoft environmet<br/>Ubuntu environment<br/>Microsoft Office softwares</p>
                  </Grid>
                  <Grid item xs={6} className="Border">
                    <h3>Languages</h3>
                    <p>Finnish - native language<br/>English - fluent</p>
                  </Grid>
              </Grid>
              </div>
          </div>
      );
  }
}