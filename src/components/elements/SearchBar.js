import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import  Fontawesome from 'react-fontawesome';

import {
     StyledSearchBar,
     StyledSearchBarContent
} from '../styles/StyledSearchBar.js';



const SearchBar = ({ callback }) => {
     const  [state, setState] = useState( ' ' );
     const timeOut = useRef(null);

          const doSearch = event => {
          const { value } = event.target;
        
          clearTimeout(timeOut.current)
            setState ( value);

            timeOut.current = setTimeout( ()=>{
            callback(value);
            }, 800);
          }

    return (
     <StyledSearchBar>
               <StyledSearchBarContent>
                    <Fontawesome  className="fa-search" name="search" size="2x" />
                    <input 
                         type="text"
                          placeholder="Pesquisar Filme"
                         onChange={doSearch}
                         value={state}
                    />
               </StyledSearchBarContent>
     </StyledSearchBar>
    )

}

SearchBar.propTypes = {
     callback: PropTypes.func,
}

export default SearchBar;