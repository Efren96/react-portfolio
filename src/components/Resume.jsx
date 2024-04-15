import myResume from "../assets/Files/Efren Leal Resume  (2024).pdf"

function Resume() {
    return (
        <section id="resume-section">
            <div className="projects-section">
                <p className="projects-banner">Resume</p>
            </div>
            <div className="resume-section">
                <div className="resume-card">
                <img className="resume-card-image" src="./Images/Frontend.svg" />
                    <hr className="card-line"></hr>
                    <img className="resume-icon-1" src="./Images/frontend-logo.svg"/>
                    <img className="divider-img" src="./Images/divider.svg"/>
                    <div className="resume-p">
                    <p className="resume-list">HTML</p>
                    <p className="resume-list">CSS</p>
                    <p className="resume-list">Java Script</p>
                    <p className="resume-list">Responsive Design</p>
                    <p className="resume-list">Git</p>
                    <p className="resume-list">React</p>
                    </div>
                </div>
                <div className="resume-card">
                <img className="resume-card-image" src="./Images/Backend.svg" />
                <hr className="card-line"></hr>
                <img className="resume-icon" src="./Images/backend-logo.svg"/>
                <img className="divider-img" src="./Images/divider.svg"/>
                <div className="resume-p">
                    <p className="resume-list">Node.Js</p>
                    <p className="resume-list">Express.Js</p>
                    <p className="resume-list">REST</p>
                    <p className="resume-list">MySQL</p>
                    <p className="resume-list">Sequelize</p>
                    <p className="resume-list">MVC</p>
                    </div>
                </div>
                <div className="resume-card">
                <img className="resume-card-image-3" src="./Images/Performance.svg" />
                <hr className="card-line-3"></hr>
                <img className="resume-icon" src="./Images/Performance-logo.svg"/>
                <img className="divider-img" src="./Images/divider.svg"/>
                <div className="resume-p">
                    <p className="resume-list">NoSql</p>
                    <p className="resume-list">MongoDb</p>
                    <p className="resume-list">Mongoose</p>
                    <p className="resume-list">MERN</p>
                    <p className="resume-list">PWA</p>
                    <p className="resume-list">NPM</p>
                    </div>
                </div>
            </div>
            <div className="btn-div">
                <a href={myResume} target="_blank"><button className="download-btn" type="button" value="Download Resume"><img className="btn-img" src="./Images/download.png"/>Download Resume</button></a>
            </div>
        </section>
    );
}
export default Resume;