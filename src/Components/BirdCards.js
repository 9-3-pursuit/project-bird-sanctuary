import React from 'react'
import birdData from '../data/birds'

class BirdCards extends React.Component {

    render() {

   let birdy = birdData.map ((bird)=> {
    return (
  


<div className="card" key={bird.id}>
            <h4>{bird.name}</h4>
            <img src ={bird.img} alt="bird"/>
            <p>Price: ${bird.amount}</p>
            <button onClick={(e) => this.props.handleOnClick(bird.id)}>Adopt</button>
       </div>
    

)

   })
   return (
    <div>{birdy}</div>
   )
}   
}


       

    

export default BirdCards;