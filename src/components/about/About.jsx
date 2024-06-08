import './about.scss';

function About(){
    return(
        <section className="about" id="about">
                <div className="about-heading">
                    <h1>About me</h1>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>I got my first computer, a Commodore 64, when I was still in high-school. I took a computer class with my father, but this was back in the old DOS-days and it didn&apos;t really amount to anything. However, when Windows 95 was launched, my interest in computers and programming really got started. I signed up for a lifetime membership at learnvisualstudio.com, following the video lectures of Bob Tabor from the USA. Besides teaching Visual Studio and C#, he had a series on Javascript and that's how I got into web design. I realized after a while that I wanted to formalize my knowledge, and a friend of mine suggested Lynda.com, now LinkedIn Learning. In recent years, I've discovered the Noroff University, based in Norway, where I'm currently studying Frontend Development.</p>
                    </div>
                    <div className="about-icon">
                        <img src="src/assets/images/software.png" alt="web design image" width="130" height="130" />
                        <p><a href="https://www.flaticon.com/free-icons/cms" title="cms icons">Cms icons created by Freepik - Flaticon</a></p>
                    </div>
                    <div className="about-tech">
                        <h2>Technologies I know:</h2>
                        <ul>
                            <li><i className="fa-brands fa-html5"></i>HTML</li>
                            <li><i className="fa-brands fa-css3"></i>CSS</li>
                            <li><i className="fa-brands fa-js"></i>Javascript</li>
                            <li><i className="fa-brands fa-react"></i>React</li>
                        </ul>
                    </div>
                </div>
                </section>
    )
}
export default About;