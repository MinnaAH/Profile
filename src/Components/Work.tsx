import React from 'react';
import './Work.css';

export default class Work extends React.Component <{}>{
    render(){
        return(
            <div className="Work">
                <br />
                <br />
                <h1> Working</h1>
                <div>
                    <h2 className="Header">Tampere University of Applied Sciences</h2>
                    <h4>2/2018-4/2018, 9/2018-12/2018, 1/2019-4/2019</h4>
                    <p>Technology trainee</p>
                    <p>My main job is to deign circuit boards using Altium Designer software. 
                        After designing I also mill the boards and solder the components. 
                        I also test the finished product and ensure everything works. </p>
                    <p>I’ve been working on a number of projects, like house environment and weather station projects.</p>
                    <p>I’ve learned about hardware designing and testing with these projects.</p>
                </div>
                <div>
                    <h2 className="Header">LEAD Henkilöstöratkaisut Ltd</h2>
                    <h4>10/2014-9/2016</h4>
                    <p>Service specialist in Elisa Ltd</p>
                    <p>I worked in Elisa’s helpdesk for two years helping customers with technical issues. 
                        I helped customers with mobile connections, broadbands and other Elisa’s services like Elisa Viihde. </p>
                    <p>I communicated with customer via phone or e-mail using Finnish or English. </p>
                    <p>I learned a lot about technology during my years in Elisa and that’s where 
                        I got my passion to educate myself in the field of ICT.</p>
                </div>
                <div>
                    <h2 className="Header">FAFO Reastaurants Ltd</h2>
                    <h4>12/2010-1/2014</h4>
                    <p>Restaurant worker in Hesburger</p>
                    <p>My first real job was restaurant worker in Hesburger at the age of 17. 
                        Main work was to serve customers and make hamburgers.</p>
                    <p>Hesburger taught me to handle various situations with customers, patience and how to cope in working life.</p>
                </div>
                <h1>Practical Trainings</h1>
                <div>
                    <h2 className="Header">iCraft Ltd</h2>
                    <h4>5/2018-6/2018</h4>
                    <p>I did my second practical training in iCraft Ltd. Company designs hardware for clients. 
                        They design the circuit boards, stack them and programs the microprocessors.</p>
                    <p>My main job was to work on a bed of nails tester. 
                        I designed the circuit board, soldered the components, tested the circuit board and programmed the microcontroller. </p>
                    <p>I learned about manufacturing the hardware products in company and get more experience of programming the microcontroller.</p>
                </div>
                <div>
                    <h2 className="Header">Tampere University of Applied Sciences</h2>
                    <h4>5/2017</h4>
                    <p>I did my first practical training at school. I worked in weather station project. 
                        The main goal of the project was to improve circuit board and calibrate light sensor. </p>
                </div>
            </div>
        );
    }
}