 

 
import React from "react";
import './App.css'
import birdData from './data/birds';
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'

class App extends React.Component{
  constructor() {
    super()
    this.state ={
      selectedBirds:[]
    }

  }
  handleOnClick = (id) => {
    const singleBird = birdData.find(e =>  e.id === id)
    console.log(singleBird)

    this.setState((previousState)=> {
      const newSelectedBirds =this.state.selectedBirds.push(singleBird);
      return {
        selectedBirds: newSelectedBirds
      }
    })
  }

render (){
  // function App (){
  //   return (

return <>
    <div>
      <h1>Hello, world!</h1>
      <BirdCards handleOnClick={this.handleOnClick}/>
      <Cart selectedBird ={this.state.selectedBirds}/>
    </div>
  
  </>
}
}   
  


export default App;
