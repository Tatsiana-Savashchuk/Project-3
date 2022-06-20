import { COLORS } from '../../assets/colors/colors';
import styled, { keyframes } from 'styled-components';

const loaderSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.span`
  display: inline-block;
  animation: ${loaderSpin} 1.2s linear infinite;
  margin: 0 0 0 6px;
  border: 4px solid ${COLORS.BLACK_TRANSPARENT};
  border-left-color: ${COLORS.GUMBO};
  border-radius: 50%;
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  padding: 0;
  background-color: transparent;
`;

export const Loader = ({ size = 14 }) => {
  return (
    <LoaderStyle size={size} />
  );
};
