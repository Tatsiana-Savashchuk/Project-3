import { Routes, Route } from "react-router-dom";
import { Appointment } from './containers/appointment/Appointment.js';
import { Home } from './containers/home/Home.js';
import { Price } from './containers/price/Price.js';
import { Contact } from './containers/contact/Contact.js';
import { Login } from './containers/login/Login.js';
import { RequiredNonAuthorization } from "./components/requiredNonAuthorization/RequiredNonAuthorization.js";
import './App.css';
import './components/button/Button.css';
import './components/input/Input.css';

export const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="price" element={<Price />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={
        <RequiredNonAuthorization>
          <Login />
        </RequiredNonAuthorization>
      } />
    </Routes>
  );
};
