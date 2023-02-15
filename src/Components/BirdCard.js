export default function BirdCard (props) {
const {thisBird} = props;
return (
        <li key={thisBird.id}>
        <h4>{thisBird.name}</h4>
        <p>price ${thisBird.amount}</p>
        <img src={thisBird.img} alt="the bird"/>
        <button>Adopt</button>
        </li>
)
}