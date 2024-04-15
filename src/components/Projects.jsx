function Projects() {
    return (
        <section id="projects-section" >
               <div className="projects-section">
            <p className="projects-banner">Projects</p>
        </div>
            <div className="projects-slider" id="projects-section">
                <div className="card">
                    <img className="card-image" src="../../public/Images/vetech-poster.jpg" />
                    <div className="card-body">
                    <h1 className="card-title">VetTech</h1>
                    <p className="card-sub-title">Seamlessly manage and access information about pets and their owners. <br/>
                        (Login info: <br/> E-mail: user@vettech.com <br/> Password: BarkMeow123 )
                    </p>
                    <a href="https://vet-tech-app-57f56dec96cd.herokuapp.com/login" target="_blank">
                        <button className="card-btn">Visit Site</button></a>
                        <a href="https://github.com/Efren96/vet-tech-app" target="_blank">
                        <button className="card-btn-2">GitHub Repo</button></a>
                    </div>
                </div>
                <div className="card">
                <img className="card-image" src="./Images/Movie go poster 3.jpg"/>
                <div className="card-body">
                    <h1 className="card-title">Movie Go+</h1>
                    <p className="card-sub-title">MovieGo+ offers users a seamless movie browsing experience with the
                        ability to
                        add movies to a "Watch Later" playlist, with a sleek and user-friendly interface designed to
                        enhance
                        engagement and satisfaction.</p>
                    <a href="https://efren96.github.io/movies-to-watch-app/" target="_blank">
                        <button className="card-btn">Visit Site</button></a>
                        <a href="https://github.com/Efren96/movies-to-watch-app" target="_blank">
                        <button className="card-btn-2">GitHub Repo</button></a>
                </div>
            </div>
            <div className="card">
                <img className="card-image" src="./Images/workday-poster.jpg"/>
                <div className="card-body">
                    <h1 className="card-title">Workday Scheduler</h1>
                    <p className="card-sub-title">Schedule your day! </p>
                    <a href="https://efren96.github.io/workday-scheduler-accessibility-revamp/" target="_blank">
                        <button className="card-btn">Visit Site</button></a>
                        <a href="https://github.com/Efren96/workday-scheduler-accessibility-revamp" target="_blank">
                        <button className="card-btn-2">GitHub Repo</button></a>
                </div>
            </div>
            <div className="card">
                <img className="card-image" src="./Images/weather-poster.jpg"/>
                <div className="card-body">
                    <h1 className="card-title">Weather Dashboard</h1>
                    <p className="card-sub-title">5-day weather forecast app (work in progress)</p>
                    <a href="https://efren96.github.io/weather-dashboard-application/" target="_blank">
                        <button className="card-btn">Visit Site</button></a>
                        <a href="https://github.com/Efren96/weather-dashboard-application" target="_blank">
                        <button className="card-btn-2">GitHub Repo</button></a>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Projects;