import React from 'react';
import './About.css';
import Grid from '@material-ui/core/Grid';

export default class About extends React.Component <{}>{
    render(){
        return(
            <div className="About">
                <br />
                <br />
                <h1 className="Header">About me</h1>
                <div className="div-large">
                    <Grid container spacing={8}>
                        <Grid item xs={2}>
                            <img className="Picture" src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/14925256_10208688592624538_1808062694638538352_n.jpg?_nc_cat=106&_nc_ht=scontent-dus1-1.xx&oh=2ea9922ce873dd5f582c6827b9da8719&oe=5CB61423" />
                        </Grid>
                        <Grid item xs={10} className="Text">
                        <p>My name is Minna Hannula and I’m 25 years old. 
                        I’m an ICT engineering 3rd grade student in Tampere University of Applied Sciences. 
                        I specialize in embedded systems and software programming. 
                        I have two specialize fields, because I like to challenge myself and I like to learn as much as possible.</p>
                        <p>I’m outgoing person and I get along with everybody. I tend to smile and laugh a lot, at least after few cups of coffee.</p>
                        <p>I’m really hardworking, but luckily, I have some free time between school and work. 
                            I spend most of my free time at home with my spouse and two bunnies reading a good book or 
                            playing videogames and watching movies.</p>
                        </Grid>
                    </Grid>
                </div>
                <div className="div-small" style={{textAlign:'center'}}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <img className="Picture-small" src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/14925256_10208688592624538_1808062694638538352_n.jpg?_nc_cat=106&_nc_ht=scontent-dus1-1.xx&oh=2ea9922ce873dd5f582c6827b9da8719&oe=5CB61423" />
                        </Grid>
                        </Grid>
                        <Grid container spacing={8}>
                        <Grid item xs={12} className="Text">
                        <p>My name is Minna Hannula and I’m 25 years old. 
                        I’m an ICT engineering 3rd grade student in Tampere University of Applied Sciences. 
                        I specialize in embedded systems and software programming. 
                        I have two specialize fields, because I like to challenge myself and I like to learn as much as possible.</p>
                        <p>I’m outgoing person and I get along with everybody. I tend to smile and laugh a lot, at least after few cups of coffee.</p>
                        <p>I’m really hardworking, but luckily, I have some free time between school and work. 
                            I spend most of my free time at home with my spouse and two bunnies reading a good book or 
                            playing videogames and watching movies.</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}