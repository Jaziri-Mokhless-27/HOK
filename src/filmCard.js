import React from 'react';
import Rating from './rating'



const FilmCard = ({el}) => {
    return (<div>
     
    <section class="Product-info">
    
    <div  class="Productive">
    <div className="Rate">
     <Rating count={el.stars} handleRating={() =>{}}/>
     </div>
    </div>

    <img src={el.src} alt="" class="product-img" />
    </section>
    
    <div  class="Productive">
    <h1>{el.name}</h1> 
    </div>
    
    </div>)
}

export default FilmCard