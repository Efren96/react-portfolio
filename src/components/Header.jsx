function Header() {
    return (
        <section>
            <div className="portfolio-img-div" id="portfolio-img">
                <img className="portfolio-logo" src="./Images/new portfolio logo (1200 x 420 px).png" alt="my-portfolio-logo" />
            </div>
            <div className="portfolio-picture-div">
                <img className="portfolio-picture" src="./Images/Portfolio-2.svg" alt="my-portfolio-logo" />
            </div>
            <div className="portfolio-picture-div">
                <img className="arrows" src="./Images/Arrows.svg" alt="my-portfolio-logo" id="about-me" />
            </div>
        </section>
    );
}
export default Header;