import './Platforms.css';
import { Link } from 'react-router-dom';
import { FaKaggle } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';

const Platform = () => {
    const handles = [
        { icon: <SiCodeforces />, link: '' },
        { icon: <SiCodechef />, link: '//www.codechef.com/users/shm_iitg' },
        { icon: <SiLeetcode />, link: '//www.leetcode.com/shm_iitg' },
        { icon: <FaKaggle />, link: '//www.kaggle.com/shmiitg' }
    ]

    return (
        <div className="platform-container">
            <div className="heading">Profiles</div>
            <div className="platform-wrapper">
                <div className="platform-msg">Check out my coding profiles across various websites</div>
                <div className="platform-handles">
                    {
                        handles.map((handle, index) => (
                            <Link to={{ pathname: `${handle.link}` }} target="_blank" key={index}>
                                {handle.icon}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Platform
