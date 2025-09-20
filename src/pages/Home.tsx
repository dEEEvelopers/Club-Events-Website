import './Home.css';
import '../socialmedia.css'

/*
Club Logo, Mission Tagline
Values & Vision
Summary of our club
Call to Action: future registration, check us out buttons 
*/


function Home() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section className="hero">
                <h2>The Home of the dEEEvelopers</h2>
                <h3>Software Enthusiasts Within EEE</h3>
                <p>
                    dEEEvelopers is a student-run club aimed at nurturing a community of software enthusiasts within NTU's School of EEE.
                </p>
                
            </section>
            <section style={{textAlign: 'center', margin: '1rem'}}>
                <h2>Why join us?</h2>
            </section>
            <section className="homecontent">
                <div className="box">
                    Enhance your Technical Skills
                </div>
                <div className="box">
                    Foster Innovative Projects
                </div>
                <div className="box">
                    Connect with Industry Professionals
                </div>
            </section>
            <section className="hero" style={{height: '20vh'}}>
                <div>
                    <h2>Our Socials</h2>
                    <a href="https://www.linkedin.com/company/ntu-eee-deeevelopers/" className="fa fa-linkedin"></a>
                    <a href="https://www.instagram.com/deeevelopersntu/" className="fa fa-instagram"></a>
                    <a href="https://t.me/dEEEvelopers" className="fa fa-telegram"></a>
                </div>
            </section>
        </div>
    );
}


export default Home