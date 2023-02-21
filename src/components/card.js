export default function Card({bird,updateCart}){
    const onClick = (event)=>{
      updateCart(bird);
    }
  
    return(
      <div className="card">
        <h6>{bird.name}</h6>
        <p>Price ${bird.amount}</p>
        <img src={bird.img} alt={bird.name} />
        <button onClick={onClick}>Adopt</button>
      </div>
    );
  }
