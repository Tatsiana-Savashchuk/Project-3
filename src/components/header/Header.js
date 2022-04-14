import { Link } from "react-router-dom";
import './Header.css';
import { MENU_ITEMS_ARRAY } from '../../constants/common.js';

export const Header = () => {
  return (
    <header>
      <h1>SAVA</h1>
      <nav>
        <ul>
          {MENU_ITEMS_ARRAY.map(({ title, url }) => <li><Link to={url} className="menu-item uppercase">{title}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
};
