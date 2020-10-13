import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background:  #09090A;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Abel',sans-serif;
    font-size: 20px;
    color: #fff;
    justify-content: space-around;
    align-items: center;

    .footer-content p{
     margin: 0;
      

      @media screen and (max-width: 768px){
      font-size: 16px;
      
      }

       @media screen and (max-width: 500px){
          font-size: 14px;
       }

    }
`;

export const  StyledTMDBLogo = styled.img`
  width: 122px;
  float: right;

    @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;


    }`

