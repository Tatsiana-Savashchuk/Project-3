import { PageBuilder } from "../../components/pageBuilder/PageBuilder";
import { COLORS } from '../../constants/common';
import styled, { css } from "styled-components";

const styleSample = css`
  display: inline-block;
  margin: 0;
  border-style: solid;
  border-radius: 24px;
  border-width: 2px;
  border-color: ${COLORS.GUMBO};
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
${styleSample}
`;
const Phone = styled.a`
${styleSample}
text-decoration: none;
`;
const Instagram = styled.a`
font-size: x-large;
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
