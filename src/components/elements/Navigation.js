import React from  'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import  { StyledNavigation } from '../styles/StyledNavigation'; 




const Navigation = ({ movie })=>  (

     <StyledNavigation>
          <div className="navigation-content">
               <Link to="/">
                    <h1>Home</h1>
               </Link>
               <p>|</p>
               <p>{movie}</p>
          </div>
     </StyledNavigation>
)

Navigation.propTypes = {
     movie: PropTypes.string,
}

export default Navigation;