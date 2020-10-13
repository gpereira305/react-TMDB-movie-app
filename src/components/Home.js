import React, { useState } from 'react';
import  { 
     POPULAR_BASE_URL,
     SEARCH_BASE_URL,
     POSTER_SIZE, 
     BACKDROP_SIZE, 
     IMAGE_BASE_URL,     
 } from '../config.js';


// Import all components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';
import Footer from './elements/Footer';


//Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
       const [ searchTerm, setSearchTerm] = useState( ' ' );
        const [
        { 
        state: { movies, currentPage, totalPages, heroImage } ,
         loading,
         error,
         } , 
         fetchMovies ,
     ] = useHomeFetch(searchTerm);
         

               const  searchMovies = search =>   {
                 const endpoint =   search  ?  SEARCH_BASE_URL  +  search  :  POPULAR_BASE_URL;

                 setSearchTerm(search); 
                 fetchMovies(endpoint);
               } 


         const loadMoreMovies = () => {
                  const searchEndpoint =  `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}` ;
                  const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

                  const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

                  fetchMovies(endpoint);
         } 

     if(error) return <div>Algo de Errado Aconteceu...</div>;
     if (!movies[0]) return <Spinner/>;

     return (
          <>
          
                     <HeroImage 
                              image={ `${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                              title={heroImage.original_title}
                              text={heroImage.overview}
                    />
               
                    <SearchBar  callback={searchMovies}/>

                         <Grid header={ searchTerm ?  'Os 20 Filmes Mais Populares do Mês' :  ' ' }>
                              {movies.map(movie => (
                                   <MovieThumb
                                        key={movie.id}
                                        clickable
                                        image={ movie.poster_path
                                        ?  `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                        :  NoImage
                                        }
                                        movieId={movie.id}
                                        movieName={movie.original_title}
                                        />
                              ))}
                         </Grid>
                         { loading &&  <Spinner/>}
                         {currentPage < totalPages && !loading && (
                          <LoadMoreBtn text="Carregar Mais" callback={loadMoreMovies} />   
                         )}

                         <Footer/>
          </>
     );
};

 





export default Home;