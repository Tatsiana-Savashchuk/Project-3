import { Link, useLocation } from "react-router-dom";
import { uniqueId } from 'lodash';
import { isUserLogged } from "../../utils/storageData";
import { logout } from "../../utils/storageData";
import { STORAGE_FIELDS, PATHS } from "../../constants/common";
import { COLORS } from '../../assets/colors/colors';
import { DEVICE } from '../../assets/devices/devices';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const SiteHeader = styled.h1`
  margin: 0;
  color: ${COLORS.MATRIX};
`;

const List = styled.ul`
  justify-content: space-between;
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
  color: ${COLORS.ZORBA_TRANSPARENT};
`;

const ListItem = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: large;
  color: ${COLORS.ZORBA_TRANSPARENT};
  ${DEVICE.MIN.DESCTOP} {
    :hover {
      opacity: 0.6;
    }
  }
`;

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
    <StyledHeader>
      <SiteHeader>SAVA</SiteHeader>
      <nav>
        <List>
          {menuItemsArray.map(({ title, url }) => 
            <ListItem key={uniqueId('menu_item_')}><StyledLink to={url}>{title}</StyledLink></ListItem>
          )}
        </List>
      </nav>
    </StyledHeader>
  );
};
