import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
    background: #000;
    border: #000;
    width: 20%;
    min-width: 200px;
    height: 60px;
    color:  #A9A9A9 ;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 40px;
    font-family: 'Abel',sans-serif;
    font-size: 28px;
    max-width: 1280px;
    display: block;
    margin: 20px auto;
    padding: 0 20px;
    outline: none;
    display: none;

  :hover {
    opacity: 0.8;
  }
`;
