import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MovingComponent from "react-moving-text";
import { RiDoubleQuotesL } from "react-icons/ri";
import me from "../images/me.svg";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-left">
                <div className="profile-left-wrapper">
                    <Navbar />
                    <div className="profile-intro">
                        Hi, I'm <span className="highlighted-text">Shubham</span>
                    </div>
                    <div className="profile-role">
                        <MovingComponent
                            type="typewriter"
                            dataText={["Web Developer", "DSA Enthusiast"]}
                        />
                    </div>
                    <div className="profile-tagline">
                        <RiDoubleQuotesL />
                        There are two ways to write error-free programs; only the third one works
                    </div>
                    <div className="profile-options">
                        <Link to="/projects" className="btn">
                            Projects
                        </Link>
                        <Link
                            to="//shubham.pdf"
                            className="btn btn-primary"
                            download="Shubham shubham.pdf"
                        >
                            Get Resume
                        </Link>
                    </div>
                </div>
            </div>
            <div className="profile-right">
                <div className="profile-bg"></div>
                <div className="profile-img">
                    <img src={me} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
