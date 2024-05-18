import { useState } from 'react';
import Dropdown from './dropdown';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg container-1 sticky-top ">
                <div>
                    <a href="#portfolio-img"><img className="nav-logo" src="./Images/Efren-Leal.svg" /></a>
                </div>
                <div className="navbar-btns collapse navbar-collapse header" id="navbarNavAltMarkup">
                    <ul className="menu">
                        <div class="navbar-nav menu" id="navbar-nav">
                            <li><a className="nav-item-one nav-link nav-link-fade-up" href="#about-me">About Me</a></li>
                            <li><a className="nav-item-two nav-link nav-link-fade-up" href="#projects-section">Projects</a>
                            </li>
                            <li><a className="nav-item-two nav-link nav-link-fade-up" href="#resume-section">Resume</a>
                            </li>
                            <li><a className="nav-item-three nav-link nav-link-fade-up" href="#contact-section">Contact</a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="right-navbar">
                    <a href="https://www.linkedin.com/in/efren-leal/" target="_blank"><img className="in-logo"
                        src="./Images/linkedin-logo.svg" /></a>
                    <a href="https://github.com/Efren96?tab=repositories" target="_blank"><img className="in-logo"
                        src="./Images/github-logo.svg" /></a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" onClick={() => setIsOpen(!isOpen)} htmlFor="menu-btn" ><span className="navicon"></span></label>
                </div>

            </nav>
            { isOpen && (
                   <div className="dropdown-div" >
                   <ul className="dropdown-list">
                       <li className="li-styling" ><a className="li-styling" href='#about-me'>About Me</a></li>
                       <li className="li-styling"><a className="li-styling" href='#projects-section'>Projects</a></li>
                       <li className="li-styling"><a className="li-styling"href='#resume-section'>Resume</a></li>
                       <li className="li-styling"><a className="li-styling" href='#contact-section'>Contact</a></li>
                   </ul>
               </div>
            )}
        </header>
    );
}
export default Nav;
