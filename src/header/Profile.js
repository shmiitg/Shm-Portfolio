import { Link } from "react-router-dom";
import MovingComponent from "react-moving-text";
import { RiDoubleQuotesL } from "react-icons/ri";
import me from "../images/me.svg";
import logo from "../images/logo.png";
import resume from "./shm_resume.pdf";
import "./Navbar.css";
import "./Profile.css";

const Profile = ({ aboutRef, skillsRef, projectsRef, resumeRef, contactRef }) => {
    const moveToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const moveToSkills = () => {
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const moveToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const moveToResume = () => {
        resumeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const moveToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="profile-container">
            <div className="profile-left">
                <div className="profile-left-wrapper">
                    <div className="nav-container">
                        <div className="nav-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-links">
                            <Link to="#" className="nav-link" onClick={moveToAbout}>
                                About
                            </Link>
                            <Link to="#" className="nav-link" onClick={moveToSkills}>
                                Skills
                            </Link>
                            <Link to="#" className="nav-link" onClick={moveToResume}>
                                Resume
                            </Link>
                            <Link to="#" className="nav-link" onClick={moveToContact}>
                                Contact Me
                            </Link>
                        </div>
                    </div>
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
                        <Link to="#" className="btn" onClick={moveToProjects}>
                            Projects
                        </Link>
                        <a
                            href={resume}
                            rel="noreferrer"
                            download="shm_resume"
                            target="_blank"
                            className="btn btn-primary"
                        >
                            Get Resume
                        </a>
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
