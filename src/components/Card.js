function Card  ({ bird , handleClick }){
    return (
    <li className="card">
        <p><b>{bird.name}</b></p>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.name}></img>
        <button className="birds" type="button" onClick={()=>handleClick(bird.id)}>ADOPT</button>
    </li>
   )
}

export default Card

//onClick={()=>handleClick(bird.id)} anonymous function (closure)


