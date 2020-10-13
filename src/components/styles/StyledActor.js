import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background:  #EE5A24 ;
  border-radius: 10px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0  0;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
