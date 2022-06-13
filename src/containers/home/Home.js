import { PageBuilder } from '../../components/pageBuilder/PageBuilder.js';
import { Button } from '../../components/button/Button.js';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../assets/colors/colors.js';
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

const Header = styled.p`
  margin: 0;
  font-size: 3em;
  color: ${COLORS.MATRIX};
`;

const Description =  styled.p`
  margin: 0;
  margin-top: 15px;
  color: ${COLORS.ZORBA};
`;

const CompanyName = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const HomeContent = () => {
  const navigate = useNavigate();
  const goToAppointment = () => {
    navigate('/appointment');
  }

  return (
    <HomeWrapper>
      <Header>manicure studio <br /><CompanyName>SAVA</CompanyName></Header>
      <Description>we take care of every client's nails</Description>
      <Button text='to make an appointment' onClickFuction={goToAppointment} uppercase />
    </HomeWrapper>
  )
}

export const Home = () => {
  return <PageBuilder main={<HomeContent />} />;
};
