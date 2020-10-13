import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import {  StyledMovieThumb } from '../styles/StyledMovieThumb';



const MovieThumb = ({ image, movieId, clickable }) => (
     <StyledMovieThumb>
          {clickable ?  (
          <Link to={`/${movieId}`} >
                 <img className="clickable" src={image} alt="Movie Thumb" /> 
          </Link>
        
          ) :  (
           <img src={image} alt="Movie Thumb"/>
          )}
    </StyledMovieThumb>

) 

MovieThumb.propTypes = {
      image: PropTypes.string,
      movieId: PropTypes.number,
      clickable: PropTypes.bool,
}

export default MovieThumb;