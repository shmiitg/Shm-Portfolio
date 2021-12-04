import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handles = [
        { icon: <FaFacebook />, link: '//www.facebook.com/shmiitg', color: '#1e4297' },
        { icon: <FaInstagram />, link: '//www.instagram.com/shm_iitg_123', color: '#c93091' },
        { icon: <FaLinkedin />, link: '//www.linkedin.com/in/shubham-mondal-206aa219b', color: '#0073b1' },
        { icon: <FaTwitter />, link: '//www.twitter.com', color: '#000' }
    ];

    return (
        <div className="footer">
            <div className="name">Shubham Mondal</div>
            <div className="social-handles">
                {
                    handles.map((handle, index) => (
                        <Link to={{ pathname: `${handle.link}` }} target="_blank" key={index}>
                            {handle.icon}
                        </Link>
                    ))
                }
            </div>
            <div className="copyright">
                <FaRegCopyright />Created by <Link to="//www.linkedin.com/in/shubham-mondal-206aa219b">shm_iitg</Link>
            </div>
        </div>
    )
}

export default Footer
