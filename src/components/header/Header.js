import { Link } from "react-router-dom";
import './Header.css';
import { MenuItemsArray } from '../menu items/MenuItems.js';

export const Header = () => {
  return (
    <header>
      <h1>SAVA</h1>
      <nav>
        <ul>
        {MenuItemsArray.map(({ title, url }) => <li><Link to={url} className="menu-item uppercase">{title}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
}
