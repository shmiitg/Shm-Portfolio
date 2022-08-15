import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const handles = [
        { icon: <FaFacebook />, link: "//www.facebook.com/shmiitg", color: "#1e4297" },
        { icon: <FaInstagram />, link: "//www.instagram.com/shmiitg", color: "#c93091" },
        { icon: <FaLinkedin />, link: "//www.linkedin.com/in/shmiitg", color: "#0073b1" },
        { icon: <FaTwitter />, link: "//www.twitter.com/shmiitg", color: "#000" },
    ];

    return (
        <div className="footer">
            <div className="name">Shubham Mondal</div>
            <div className="social-handles">
                {handles.map((handle, index) => (
                    <Link to={{ pathname: `${handle.link}` }} target="_blank" key={index}>
                        {handle.icon}
                    </Link>
                ))}
            </div>
            <div className="copyright">
                <FaRegCopyright />
                Created by{" "}
                <Link to="//www.github.com/shmiitg" target="_blank">
                    shmiitg
                </Link>
            </div>
        </div>
    );
};

export default Footer;
