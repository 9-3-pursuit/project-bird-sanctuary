 

 
import React, {useState} from "react";
import './App.css'
import birdData from "./data/birds";
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'


   
   
// handleOnClick =(id)=> {
//    const singleBird = birdData.find(e =>  e.id === id)
//      console.log(singleBird)

    //  this.setState((previousState)=> {
    //   const newSelectedBirds =this.state.selectedBirds.push(singleBird);
    //   return {
    //    selectedBirds: newSelectedBirds
    //   }
    // })
    // }


 function App (){
  const [bird, setBird] =useState = (birdData)
  return (


     <div>
      {/* <h1>Hello, world!</h1> */}
      <BirdCards handleOnClick={this.handleOnClick}/>
      <Cart selectedBirds={this.state.selectedBirds}/>
    </div> 
  
  )
  }

  


  


export default App;
