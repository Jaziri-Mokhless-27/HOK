import React from 'react';

const Rating = ({count, handleRating}) => {

        let stars = []
        for(let i=0; i<5; i++){
            if(count > i) {
                stars.push(<span onClick={() => handleRating(i+1)} class="fa fa-star checked"></span>)
            } else {
                stars.push(<span onClick={() => handleRating(i+1)} class="fa fa-star"></span>)
            }
        }
        return ( 
            <div>
                {stars}
            </div>
            )
        }

    

export default Rating 