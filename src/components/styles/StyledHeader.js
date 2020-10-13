import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #06041C ;
  padding: 0 40px;
  box-sizing: border-box;

    @media screen and (max-width: 400px){
      padding: 0 10px;
    }

  .header-content {
     max-width: 1280px;
    min-height: 75px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    align-items: end;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
        padding: 10px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 200px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 100px;
  margin-top: 20px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
