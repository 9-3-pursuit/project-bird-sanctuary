export default function BirdCard ({thisBird, cart, updateCart}) {
        console.log(cart)
        function adopt () {
                updateCart([...cart, { name:thisBird.name, ammount:thisBird.amount}])
        }
return (
        <li key={thisBird.id}>
        <h4>{thisBird.name}</h4>
        <p>price ${thisBird.amount}</p>
        <img src={thisBird.img} alt="the bird"/>
        <button onClick={adopt}>Adopt</button>
        </li>
)
}