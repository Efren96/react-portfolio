function Nav() {
    return (
       <header className="header">
        <nav className="navbar navbar-expand-lg container-1 sticky-top ">
            <div>
            <a href="#portfolio-img"><img className="nav-logo" src="../../Images/Efren-Leal.svg"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button></a>
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
                        src="./Images/linkedin-logo.svg"/></a>
                <a href="https://github.com/Efren96?tab=repositories" target="_blank"><img className="in-logo"
                        src="./Images/github-logo.svg"/></a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            </div>
        </nav>
       </header>
    );
  }
export default Nav;
