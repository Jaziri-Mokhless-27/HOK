import React from 'react';
import FilmCard from './filmCard';



const MovieContainer = ({films}) => {
    let affiche = []
   


     films.map(el =>  
     affiche.push(
     <FilmCard el={el} /> )
  

    )
         

     
  
      
      return (
        <div class="Content">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
        {affiche}
        </div>
          );
    }
  

export default MovieContainer