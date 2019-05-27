import React from 'react';
import Site from './site'
import './App.css';
import Rating from './rating'
import MovieContainer from './MovieContainer';
import img1 from './img/Inception.jpg';
import img2 from './img/Dark-Knight.jpg';
import img3 from './img/The-Equalizer.jpg';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     loading:setTimeout(()=>{this.setState({loading:false})},3000)
      /*numero:1,
      entry:'',
      films : [
        {stars:2,
         src:img1,
         name:'Inception'},
        {stars:4,
        src:img2,
        name:'Dark Knight'},
        {stars:5,
        src:img3,
        name:'The Equalizer'}
      ]*/
     }

  }

  /*handleInput=(e) => {
    this.setState({entry:e.target.value})
  } 



handleMinRating = (index) => {
  this.setState({ numero: index})
}*/

Loader = (Component) => {
  if(!this.state.loading) return Component
  return (<span className="spin">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
  <i class="fas fa-spinner"></i></span>)
}

// affiche = (a,b) => {
//   if( (a.toUpperCase().includes(this.state.entry.toUpperCase())) && (b>=this.state.numero))
//   return true;
// }

    render() {
    return (   <div>
                 {this.Loader(<Site />)}
                </div>
      
  //             <div> 
                
  //                <section className="top">
  //               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
  //               <input className="entry" onChange={this.handleInput} value={this.state.entry}></input>

  //               <div>
  //               <Rating count={this.state.numero} handleRating={this.handleMinRating}/>


  //               </div>
  //               </section>  
  //                {/* <MovieContainer films={this.state.films.filter(el => this.affiche(el.name,el.stars))}/>     */}
  //                <MovieContainer films={this.state.films.filter(el => el.name.includes(this.state.entry) && el.stars >= this.state.numero)}/>    

                   

  //               <section class="ajout">
  //               {/* <button class="button"><i class="far fa-plus-square"></i></button> */}
  //               <a href="./mokh.html">Ajouter</a>
  //               </section>
  //             </div>
              
            
            
         );
  }
}






export default App