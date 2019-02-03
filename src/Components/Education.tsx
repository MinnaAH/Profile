import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import './Education.css';

import {year1, year2, year3, year4, freeChoice} from '../data';

var root1 = {
  display: 'table'
};
var root2 = {
  display: 'none'
};
var root3 = {
  display: 'none'
};
var root4 = {
  display: 'none'
};
var root5 = {
  display: 'none'
};

export default class Education extends React.Component<any, any>{

  constructor(props:any){
    super(props);
    this.state = {
      open: false
    }
  }
  handleChange1(event: any) : void {
    this.setState({ open: !this.state.open });
    if(this.state.open){
      root1={
        display: 'table'
      }
      root2={
        display: 'none'
      }
      root3={
        display: 'none'
      }
      root4={
        display: 'none'
      }
      root5={
        display: 'none'
      }
    }
    else{
      root1={
        display: 'none'
      }
    };
  }
  handleChange2(event: any) : void {
    this.setState({ open: !this.state.open });
    if(this.state.open){
      root1={
        display: 'none'
      }
      root2={
        display: 'table'
      }
      root3={
        display: 'none'
      }
      root4={
        display: 'none'
      }
      root5={
        display: 'none'
      }
    }
    else{
      root2={
        display: 'none'
      }
    };
  }
  handleChange3(event: any) : void {
    this.setState({ open: !this.state.open });
    if(this.state.open){
      root1={
        display: 'none'
      }
      root2={
        display: 'none'
      }
      root3={
        display: 'table'
      }
      root4={
        display: 'none'
      }
      root5={
        display: 'none'
      }
    }
    else{
      root3={
        display: 'none'
      }
    };
  }
  handleChange4(event: any) : void {
    this.setState({ open: !this.state.open });
    if(this.state.open){
      root1={
        display: 'none'
      }
      root2={
        display: 'none'
      }
      root3={
        display: 'none'
      }
      root4={
        display: 'table'
      }
      root5={
        display: 'none'
      }
    }
    else{
      root4={
        display: 'none'
      }
    };
  }
  handleChange5(event: any) : void {
    this.setState({ open: !this.state.open });
    if(this.state.open){
      root1={
        display: 'none'
      }
      root2={
        display: 'none'
      }
      root3={
        display: 'none'
      }
      root4={
        display: 'none'
      }
      root5={
        display: 'table'
      }
    }
    else{
      root5={
        display: 'none'
      }
    };
  }
  render(){

    //Sum academic credits
    //Data created using javascript array
    const array1 = year1.map(year1Results => (year1Results.cr));
    const array2 = year2.map(year2Results =>(year2Results.cr));
    const array3 = year3.map(year3Results =>(year3Results.cr));
    const array4 = year4.map(year4Results =>(year4Results.cr));
    const array5 = freeChoice.map(freeChoiceResults =>(freeChoiceResults.cr));

    function sumProperty(arr: number[]) {

      return arr.reduce((total, obj) => {
        if (typeof obj === 'string') {
          return total + Number(obj);
        }
        return total + obj;
      }, 0);
    }
    
    let totalAmount1 = ( sumProperty(array1) ).toFixed(2);
    let totalAmount2 = ( sumProperty(array2) ).toFixed(2);
    let totalAmount3 = ( sumProperty(array3) ).toFixed(2); 
    let totalAmount4 = ( sumProperty(array4) ).toFixed(2);
    let totalAmount5 = ( sumProperty(array5) ).toFixed(2); 

    return(
      <div className="Education">
        <br />
        <br />
        <h1> Education</h1>
        <div>
          <Table>
            <TableHead className="tableHeader">
              <TableRow>
                <TableCell>Degree</TableCell>
                <TableCell>School</TableCell>
                <TableCell>Garaduation</TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
              <TableRow>
                <TableCell>Undergraduate</TableCell>
                <TableCell>Tammerkoski High School</TableCell>
                <TableCell>2012</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bachelor of ICT Engineering</TableCell>
                <TableCell>Tampere Unerversity of Applied Sciences</TableCell>
                <TableCell>2020</TableCell>
              </TableRow>
             </TableBody>
          </Table>
         </div>
         <div>
          <br />
          <div>
            <h1>Academic Progress in TAMK</h1>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <button className="Button" onClick = { e => this.handleChange1(e) }>TAMK - 1st year</button>
                <button className="Button" onClick = { e => this.handleChange2(e) }>TAMK - 2nd year</button>
                <button className="Button" onClick = { e => this.handleChange3(e) }>TAMK - 3rd year</button>
                <button className="Button" onClick = { e => this.handleChange4(e) }>TAMK - 4th year</button>
                <button className="Button" onClick = { e => this.handleChange5(e) }>TAMK - Free-Choice studies</button>
              </Grid>
              <Grid item xs={8}>
                <Table style={root1}>
                  <TableHead className="tableHeader">
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                      <TableCell>Academic Credits</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {year1.map(year1Studies =>(
                    <TableRow>
                    <TableCell>{year1Studies.name}</TableCell>
                    <TableCell>{year1Studies.cr}</TableCell>
                    <TableCell>{year1Studies.grade}</TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total ammount of academic credits</TableCell>
                      <TableCell>{totalAmount1}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table style={root2}>
                <TableHead className="tableHeader">
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                      <TableCell>Academic Credits</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {year2.map(year2Studies =>(
                    <TableRow>
                    <TableCell>{year2Studies.name}</TableCell>
                    <TableCell>{year2Studies.cr}</TableCell>
                    <TableCell>{year2Studies.grade}</TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total ammount of academic credits</TableCell>
                      <TableCell>{totalAmount2}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table style={root3}>
                <TableHead className="tableHeader">
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                      <TableCell>Academic Credits</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {year3.map(year3Studies =>(
                    <TableRow>
                    <TableCell>{year3Studies.name}</TableCell>
                    <TableCell>{year3Studies.cr}</TableCell>
                    <TableCell>{year3Studies.grade}</TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total ammount of academic credits</TableCell>
                      <TableCell>{totalAmount3}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table style={root4}>
                <TableHead className="tableHeader">
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                      <TableCell>Academic Credits</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead >
                  <TableBody>
                  {year4.map(year4Studies =>(
                    <TableRow>
                    <TableCell>{year4Studies.name}</TableCell>
                    <TableCell>{year4Studies.cr}</TableCell>
                    <TableCell>{year4Studies.grade}</TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total ammount of academic credits</TableCell>
                      <TableCell>{totalAmount4}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table style={root5}>
                <TableHead className="tableHeader">
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                      <TableCell>Academic Credits</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {freeChoice.map(freeChoiceStudies =>(
                    <TableRow>
                    <TableCell>{freeChoiceStudies.name}</TableCell>
                    <TableCell>{freeChoiceStudies.cr}</TableCell>
                    <TableCell>{freeChoiceStudies.grade}</TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total ammount of academic credits</TableCell>
                      <TableCell>{totalAmount5}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}