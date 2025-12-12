import React, { useState } from 'react'; // Import useState
import './sidebar.css'
import Data from '../sidebar/data/Data'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon for open state
import logo from '../../../assets/logo-image.png'
import LogoutIcon from '../../../assets/LogoutIcon.png'


const Sidebar = () => {
    // 1. State to track if the sidebar is open on mobile
    const [isOpen, setIsOpen] = useState(false);

    // 2. Function to toggle the open state
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Apply 'mobile-open' class conditionally for CSS targeting
        <div className={`boxContainer ${isOpen ? 'mobile-open' : ''}`}>
            
            {/* Header section containing Logo and Toggle Icon */}
            <div className='sidebar-header'>
                <img src={logo} alt="logoImage" className='PICTURELOGO' />
                
                {/* Mobile Toggle Button (The Hamburger) */}
                <div 
                    className='bar' // Class 'bar' is now used for the toggle button
                    onClick={toggleSidebar}
                >
                    {/* Display CloseIcon when open, MenuIcon when closed */}
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>


            {/* Content section: visible on desktop, conditionally visible on mobile */}
            <div className='sidebar-content'>
                {Data.map((item) => {
                    return (
                        <div key={item.id} className='InnerElement'>
                            <div className='sidebar'>
                                <Link 
                                    to={item.path} 
                                    className='new'
                                    onClick={toggleSidebar} // Hides menu after navigation click
                                >
                                    <img src={item.icon} alt="icon-image" />
                                    <div>{item.heading}</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            
                <div 
                    className='logoutandIcon'
                    onClick={toggleSidebar} // Hides menu after logout click
                >
                    <img src={LogoutIcon} alt="LogoutIcon" className='LogoutIcon' />
                    <h3>Logout</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

