import { Header } from '../header/Header';
import styled, { css } from 'styled-components';

const PageWrapper = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-areas: "head head"
                       "side main"
                       "side sect";
  grid-template-rows: 50px 2fr 1fr;
  grid-template-columns: 1.2fr 1fr;
`;

const blockStyle = css`
  align-items: center;
  justify-content: center;
  display: flex;
  border: solid 1px;
`;

const SiteMenu = styled.div`
  grid-area: head;
  ${blockStyle};
`;

const Sidebar = styled.aside`
  grid-area: side;
  ${blockStyle};
`;

const Main = styled.main`
  flex-direction: column;
  grid-area: main;
  ${blockStyle};
`;

const Section = styled.section`
  grid-area: sect;
  ${blockStyle};
`;

export const PageBuilder = ({ 
  header = <Header />, 
  sidebar = null, 
  main = null, 
  section = null,
}) => {
  return (
    <PageWrapper>   
      <SiteMenu>{header}</SiteMenu>
      <Sidebar>{sidebar}</Sidebar>
      <Main>{main}</Main>
      <Section>{section}</Section>
    </PageWrapper>
  );
};
