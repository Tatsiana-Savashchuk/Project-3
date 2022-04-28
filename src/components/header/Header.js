import { Link, useLocation } from "react-router-dom";
import './Header.css';
import { uniqueId } from 'lodash';

const handleLogout = () => {
  localStorage.removeItem('active');
};

export const Header = () => {
  const location = useLocation();

  const menuItemsArray = [
    { title: 'Home', url: "/" }, 
    { title: 'Appointment', url: "/appointment" }, 
    { title: 'Price', url: "/price" },
    { title: 'Contact', url: "/contact" }, 
    {
      title: localStorage.getItem('active')
      ? <i className="bi bi-suit-heart-fill sign-out" onClick={handleLogout}></i> 
      : <i className="bi bi-suit-heart sign-in"></i>
        
      , 
      url: localStorage.getItem('active') ? location.pathname : "/login",
    },
  ];

  return (
    <header className="header">
      <h1>SAVA</h1>
      <nav>
        <ul>
          {menuItemsArray.map(({ title, url }) => 
            <li key={uniqueId('menu_item_')}><Link to={url} className="menu-item uppercase">{title}</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};
