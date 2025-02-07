import './Sidebar.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index); // Set the clicked item's index as active
  };

  const menuItems = [
    {
      icon: '/profilePageLogo.svg',
      text: 'Profile',
      route: '/bankOfficer',
    },
    {
      icon: '/dashboard.svg',
      text: 'Dashboard',
    },
    {
      icon: '/myAsset.svg',
      text: 'My Assets',
      route: '/myAssets',
    },
    {
      icon: 'profileS.svg',
      text: 'Profile Settings',
      route: '/profile',
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/bankOfficer">
          <div className="logo-circle">
     
              <span className="logo-text">S8</span>
   
          </div>
        </Link>
      </div>
      <div className="separator"></div> {/* Add the separator */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <Link to={item.route} className="menu-link">
              <img src={item.icon} alt={item.text} className="icon" />
              <div className="text">{item.text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;