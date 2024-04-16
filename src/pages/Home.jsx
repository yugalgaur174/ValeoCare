import valeo from '../assets/valeo_logo.png';
import './Home.css';
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="navbar">
            <img className="logo" src={valeo} alt="valeo_logo"></img>
            <ul className="sections">
                <li><a href= " ">Home</a></li>
                <li><a href= " ">Community Forum</a></li>
                <li><Link to="/Resources"><a href= "">Resources</a></Link></li>
                <li><a href= " ">About Us</a></li>
            </ul>
        </div>
        <div className="home">
            <h1 className="heading">Join Our Community for Sustainable Automotive Repair Solutions.</h1>
            <p className ="desc">Empowering automotive enthusiasts with access to repair guides, collaboration with experts, and community support.</p>
            <div className="button_container">
            <a href="#forum" className="forum_button">Get Started</a>
            </div>
        </div>
        </>
    )
}

export default Home;
