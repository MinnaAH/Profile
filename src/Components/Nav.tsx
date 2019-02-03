import React from 'react';
import './Nav.css';

export default class Navbar extends React.Component <{}>{
    render(){
        return(
            <header className="toolbar">
             <nav className="toolbar_navigation">
                <div className="toolbar_header"><a href="#About">About me</a></div>
                <div className="toolbar_navigation-item">
                    <ul>
                        <li><a href ="#Education">Education</a></li>
                        <li><a href ="#Skills">Skills</a></li>
                        <li><a href ="#Work">Working history</a></li>
                        <li><a href="https://www.linkedin.com/in/minna-hannula-774798139">LinkedIN</a></li>
                        <li><a href="https://github.com/MinnaAH">GitHub</a></li>
                    </ul>
                </div>
                <div className="toolbar_navigation-drop">
                    <ul><li><a href ="#About">About me</a></li></ul>
                    <div className="drop-content">
                        <li><a href ="#Education">Education</a></li>
                        <li><a href ="#Skills">Skills</a></li>
                        <li><a href ="#Work">Working history</a></li>
                        <li><a href="">LinkedIN</a></li>
                        <li><a href="">GitHub</a></li>
                    </div>
                </div>
             </nav>
            </header>
            );
        }
}