import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return (
    <header>
      <h1>SAVA</h1>
      <nav>
        <ul>
          <li><Link to="/" className="menu-item uppercase">Home</Link></li>
          <li><Link to="/appointment" className="menu-item uppercase">Appointment</Link></li>
          <li><Link to="/price" className="menu-item uppercase">Price</Link></li>
          <li><Link to="/contact" className="menu-item uppercase">Contact</Link></li>
          <li>
            <Link to="/login" className="menu-item">
              <i className="bi bi-suit-heart"></i>
              <i className="bi bi-suit-heart-fill" hidden></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
