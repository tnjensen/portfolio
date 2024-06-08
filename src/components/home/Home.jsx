import './home.scss';

function Home(){
    return(
        <main className="main">
            <section className="main-content" id="index">
                <p>Hello, my name is</p>
                <h1 className="name">Thomas</h1>
                <p>and I&apos;m a <span className="span">frontend developer</span></p>
                <a href="#portfolio" className="cta learn-more">Learn More</a>
                <figure className="landing-img">
                    <img src="src/assets/images/elvehavn_1.jpg" alt="landing page image" width="180" height="180" />
                    {/* <figcaption>Me in Elvehavn, Trondheim</figcaption> */}
                </figure>
                <figure className="landing-icon">
                    <img src="src/assets/images/landing-page.png" alt="landing page image" className="slide-left" width="512" height="512" />
                    <figcaption><a href="https://www.flaticon.com/free-icons/landing-page" className="slide-left">Landing page icons created by Freepik - Flaticon</a></figcaption>
                </figure>
            </section>        
        </main>
    )
}
export default Home;