import './Home.css';
import '../socialmedia.css'
import deevelopers_photo from '../assets/deeevelopers.jpg'
//import image1 from '../assets/github_workshop.jpg'
//import image2 from '../assets/github_workshop_2.jpg'
import singtel_visit from '../assets/singtel_visit.jpg'
import google_hackathon from '../assets/google_hackathon.jpg'

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
            
            <div className="homeContainer">
                <section className="connect" style={{padding: "1rem", height: "auto", paddingBottom: "1rem"}}>
                    <h1 style={{fontFamily: "monospace"}}>dEEEvelopers.</h1>
                    <h2 style={{textAlign: "center"}}>Where Coders Become Creators</h2>

                </section>
                <section className="card">
                    <div className="missionText">
                        <h3>Software Enthusiasts Within EEE</h3>
                        <p>
                            dEEEvelopers is a student-run club aimed at nurturing a community of software enthusiasts
                        </p>
                        <h3>Our Mission</h3>
                        <p>To inspire, educate, and empower EEE/IEM students for software development</p>
                        <h3>2025 Vision</h3>
                        <p>Our core focus for 2025 is on advocating for <br></br><b>Full Stack Development</b></p>
                    </div>
                </section>
                <section className="image">
                    <img src={deevelopers_photo}></img>
                </section>

                <section className="image">
                    <img src={singtel_visit}></img>
                </section>
                <section className="card">
                    <h2>Why join us?</h2>
                    <div>
                        <li>
                            <h3>Fostering Innovative & Challenging Projects</h3>
                        </li>
                        <li>
                            <h3>Hosting Exciting Workshops & Events</h3>
                        </li>
                        <li>
                            <h3>Connect with Industry Professionals</h3>
                        </li>
                        
                    </div>
                </section>

                <section className="card">
                    <h2>Highlights</h2>
                    <div>
                        <h3>Singtel Visit</h3>
                        <h3>Google Hackathon</h3>
                        <h3>Fullstack Workshops</h3>
                    </div>
                </section>
                <section className="image">
                    <img src={google_hackathon}></img>
                </section>

                <section className="connect">
                    <div>
                        <h2>Connect with Us</h2>
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