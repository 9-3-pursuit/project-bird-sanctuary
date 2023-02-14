import React from 'react'
import birdData from '../data/birds'

class Cart extends React.Component {
    render () {
        const {newSelectedBirds} = this.props
    
    const addtoCart = ()=> {
    }
        return (
            <div className='cart'>
                <h3>Cart</h3>
                <h4>Total:</h4>
                <ol>
                    <li></li>
                </ol>
            </div>
         )
    }
}






export default Cart