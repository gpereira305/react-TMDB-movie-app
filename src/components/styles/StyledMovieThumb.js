import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    transition: all 0.4s ease;
    object-fit: cover;
    border-radius: 10px;

    :hover {
      transform: scale(1.08);
      box-shadow: 0px 6px 24px -2px rgba(238,90,36,1);
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;
