function Header() {
    return (
        <section id="about-me">
            <div className="aboutme-img-div" id="about-me">
                <img className="aboutme-logo" src="../Images/About-Me.svg" alt="my-portfolio-logo" id="about-me" />
            </div>
            <div className="aboutme-paragraph">
                <p className="aboutme">"My name is Efren Leal, I’m 28 years old and currently reside in Houston, Texas.
                    I am a recent Rice University graduate, completing a full stack coding bootcamp with a passion for front-end design/development and for life long learning. I am extremely hard working and dedicated to bringing ideas to life through creative thinking, collaboration and communication. I am eager to take my skills to a company where I can continue to grown and learn as a professional software developer."  </p>
                    <img className="blue-divider" src="./Images/Blue-divider.svg" alt="my-portfolio-logo" />
            </div>
        </section>
    );
}
export default Header;