import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #09090A;
  color: #fff;

  .navigation-content {
    display: flex;
   align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    
    h1{
      font-family: 'Abel', sans-serif;
      font-size: 42px;
      float: left;
      color: #EE5A24;
      padding-right: 20;
      text-decoration: none;
      padding: 0 5px;

        @media screen and (max-width: 768px){
           font-size: 36px;
        }
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 32px;
      float: left;
      color: #fff;
      padding: 0 5px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }
  }
`;
