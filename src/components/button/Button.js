import { Loader } from '../loader/Loader';
import { COLORS } from '../../assets/colors/colors';
import { DEVICE } from '../../assets/devices/devices';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  align-items: center;
  display: flex;
  margin-top: 30px;
  border: 2px ${COLORS.MATRIX} solid;
  border-radius: 24px;
  width: fit-content;
  padding: 14px;
  background-color: white;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: small;
  font-weight: bold;
  color: ${COLORS.MATRIX};
  pointer-events: ${({ isLoading }) => isLoading ? 'none' : 'auto'};
  ${DEVICE.MIN.DESCTOP} {
    :hover {
      background-color: ${COLORS.MACARONI_AND_CHEESE};
    }
  }
`;

export const Button = ({ className, onClickFuction = null, text = null, isLoading = false }) => {
  
  return (
    <ButtonStyle className={className} onClick={onClickFuction} isLoading={isLoading}>
      {text}
      {isLoading && <Loader size={8} />}
    </ButtonStyle>
  );
};
