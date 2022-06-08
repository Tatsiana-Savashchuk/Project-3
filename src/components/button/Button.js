import { Loader } from '../loader/Loader';
import { COLORS, SCREEN_SIZE } from '../../constants/common';
import styled from "styled-components";

export const Button = ({ onClickFuction = null, text = null, isLoading = false }) => {
  const MainButton = styled.button`
    align-items: center;
    display: flex;
    margin-top: 30px;
    border-style: solid;
    border-radius: 24px;
    border-width: 2px;
    border-color: ${COLORS.MATRIX};
    width: fit-content;
    padding: 14px;
    background-color: white;
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: small;
    font-weight: bold;
    color: ${COLORS.MATRIX};
    pointer-events: ${isLoading ? 'none' : 'auto'};
    @media screen and (min-width: ${SCREEN_SIZE.DESCTOPS_AND_LARGE_SCREENS_MIN}) {
      :hover {
        background-color: ${COLORS.MACARONI_AND_CHEESE};
      }
    }
  `;
  
  return (
    <MainButton onClick={onClickFuction}>{text}{isLoading && <Loader />}</MainButton>
  );
};
