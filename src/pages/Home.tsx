import './Home.css';
import '../socialmedia.css'
import image3 from '../assets/deeevelopers.jpg'
import image1 from '../assets/github_workshop.jpg'
import image2 from '../assets/github_workshop_2.jpg'

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
            <h1 style={{textAlign: "center"}}>Home of the dEEEvelopers</h1>
            <div className="homeContainer">
                <section className="card">
                    <div className="missionText">
                        <h3>Software Enthusiasts Within EEE</h3>
                        <p>
                            dEEEvelopers is a student-run club aimed at nurturing a community of software enthusiasts
                        </p>
                        <h3>Our Mission</h3>
                        <p>To inspire, educate, and empower EEE/IEM students for software development</p>
                    </div>
                </section>
                <section className="image">
                    <img src={image3}></img>
                </section>

                <section className="image">
                    <img src={image2}></img>
                </section>
                <section className="card">
                    <h2>What do we do?</h2>
                    <div>
                        <h3>Special Projects for NTU students</h3>
                        <h3>Host Workshops & Events</h3>
                        <h3>Support and nurture peer learning</h3>
                    </div>
                </section>

                <section className="card">
                    <h2>Why join us?</h2>
                    <div>
                        <h3>Enhance your Technical Skills</h3>
                        <h3>Foster Innovative Projects</h3>
                        <h3>Connect with Industry Professionals</h3>
                    </div>
                </section>
                <section className="image">
                    <img src={image1}></img>
                </section>

                <section className="connect" style={{height: '20vh'}}>
                    <div>
                        <h2>Our Socials</h2>
                        <div className="socials">
                            <a href="https://www.linkedin.com/company/ntu-eee-deeevelopers/" className="fa fa-linkedin"></a>
                            <a href="https://www.instagram.com/deeevelopersntu/" className="fa fa-instagram"></a>
                            <a href="https://t.me/dEEEvelopers" className="fa fa-telegram"></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>   
    );
}


export default Home