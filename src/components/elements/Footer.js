import React from 'react';

import TMDBLogo from '../images/tmdb_logo.svg';
import {
      StyledFooter,
      StyledTMDBLogo

} from  '../styles/StyledFooter';



const Footer = ()=> (
<StyledFooter>
  
      <div className="footer-content">
         <p>&copy; 2020   React Movie App | Giovane Pereira</p>
         <p>Build with React JS. TMDB Movies API</p>
    </div>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/>
</StyledFooter>
)


export default Footer;