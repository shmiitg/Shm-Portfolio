import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    const navLinks = ['About me', 'Skills', 'Resume', 'Contact me']

    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                {navLinks.map((link, index) => (
                    <div key={index} className="nav-link">{link}</div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
