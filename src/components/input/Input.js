import { COLORS } from '../../assets/colors/colors';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-style: solid;
  border-radius: 24px;
  border-width: 2px;
  border-color: ${COLORS.GUMBO};
  outline: none;
  padding: 10px;
  background-color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  text-align: center;
  color: ${COLORS.GUMBO};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  ::placeholder {
    color: ${COLORS.BLACK_TRANSPARENT};
  }
`;

export const Input = ({ type = null, className, onChangeFunction = null, disabled = false }) => {
  
  return (
    <StyledInput type={type} className={className} onChange={onChangeFunction} disabled={disabled} />
  );
};
