import { PageBuilder } from "../../components/pageBuilder/PageBuilder";
import { COLORS } from "../../assets/colors/colors";
import styled, { css } from "styled-components";

const contactInformationStyle = css`
  display: inline-block;
  margin: 0;
  border: 2px ${COLORS.GUMBO} solid;
  border-radius: 24px;
  width: 170px;
  padding: 8px;
  font-size: small;
  font-weight: bold;
  color: ${COLORS.GUMBO};
`

const Section = styled.section`
  text-align: center;
`;

const Title = styled.p`
  margin-top: 40px;
  color: ${COLORS.MATRIX};
  text-transform: uppercase;
  font-weight: bold;
`;

const Name = styled.p`
  ${contactInformationStyle}
`;
const Phone = styled.a`
  ${contactInformationStyle}
  text-decoration: none;
`;
const Instagram = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: ${COLORS.GUMBO};
`;

const ContactContent = () => {
  return (
    <Section>
      <Title>Name of your master</Title>
      <Name>Irina</Name>
      <Title>Phone number</Title>
      <Phone href="tel:+375298997516">+375 29 899 75 16</Phone>
      <Title>Instagram</Title>
      <Instagram className="bi bi-instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer"> </Instagram>
  </Section>
  )
}

export const Contact = () => {
  return <PageBuilder main={<ContactContent />} />;
};
