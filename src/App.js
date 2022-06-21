import { Routes, Route } from "react-router-dom";
import { Appointment } from './containers/appointment/Appointment.js';
import { Home } from './containers/home/Home.js';
import { Price } from './containers/price/Price.js';
import { Contact } from './containers/contact/Contact.js';
import { Login } from './containers/login/Login.js';
import { UnauthorizedOnly } from "./components/unauthorizedOnly/UnauthorizedOnly.js";
import { PATHS } from "./constants/common.js";

export const App = () => {
  return(
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.APPOINTMENT} element={<Appointment />} />
      <Route path={PATHS.PRICE} element={<Price />} />
      <Route path={PATHS.CONTACT} element={<Contact />} />
      <Route path={PATHS.LOGIN} element={
        <UnauthorizedOnly>
          <Login />
        </UnauthorizedOnly>
      } />
    </Routes>
  );
};
