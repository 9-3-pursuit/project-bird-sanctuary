function Card  ({ bird , handleClick, createList}){
    return (
    <li className="card">
        <p><b>{bird.name}</b></p>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.name}></img>
        <button type="button" 
        onClick={()=>
        handleClick(bird.id)}>ADOPT</button>
    </li>
   )
}

export default Card




