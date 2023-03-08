import "../Components/BirdCard.css"


export default function BirdCard({ bird }) {
    
   
        return (
            <div  className="birds card">
             <h4>🐦➰ {bird.name} ➰🐦</h4>
                <p>Total ${bird.amount}</p>
                <img src={bird.img} width="200" height="200" alt="bird"></img>
                <br></br>
                <button onClick={() => {
                    return alert("I'm in the function")
                }}>
                    Adopt
                </button>
            </div>
        )
        
        return bird
    }

