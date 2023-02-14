
// what do i want this page to do ? 
//  - pull data from birds.js & display it as the following:
//    - bird name as h1
//    - bird name 
//    - bird img 
//    - adopt button that passes info to cart.js
// - requires .map to loop through all info & return what we want. 

export default function BirdsDisplay({birds,cart,setCart}){
    function handleClick(bird){
        // console.log(cart)
        setCart([...cart,bird])
        
    }
            
    const bird = birds.map((bird) => {
    return (
        <div className="card" key={bird.id}>
                    <h5>{bird.name}</h5>
                    <h6>Price:${bird.amount}</h6>
                    <img alt="bird.name"src={bird.img}/>
                    <button onClick={() => handleClick(bird)} type="submit" text="Adopt">Adopt</button>
                     {/* annon function allows us to access bird param */}
        </div>)
    })
    return (
        <div>
            {bird}
        </div>
    );

}
    
   



