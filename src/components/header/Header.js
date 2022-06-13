import { Link, useLocation } from "react-router-dom";
import './Header.css';
import { uniqueId } from 'lodash';
import { isUserLogged } from "../../utils/storageData";
import { logout } from "../../utils/storageData";
import { STORAGE_FIELDS, PATHS } from "../../constants/common";

export const Header = () => {
  const location = useLocation();
  const user = isUserLogged(STORAGE_FIELDS.ACTIVE);

  const menuItemsArray = [
    { title: 'Home', url: PATHS.HOME }, 
    { title: 'Appointment', url: PATHS.APPOINTMENT }, 
    { title: 'Price', url: PATHS.PRICE },
    { title: 'Contact', url: PATHS.CONTACT }, 
    {
      title: user
        ? <i className="bi bi-suit-heart-fill sign-out" onClick={logout}></i> 
        : <i className="bi bi-suit-heart sign-in"></i>, 
      url: user ? location.pathname : PATHS.LOGIN,
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
