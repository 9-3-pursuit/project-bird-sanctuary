import "./Checkout.css"

function Checkout(){
   
    function handleSubmit(){ 
        alert("You have adopted birds. Thank you!")  
    }

    return (
        <div className="Checkout">
            <form onSubmit={handleSubmit}>
                <h5>Checkout</h5>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName"></input>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName"></input>
                <label htmlFor="email">Email</label>
                <input id="email"></input>
                <label htmlFor="zipCode">Zip Code</label>
                <input id="zipCode"></input>
                <input type="submit"/>  
            </form>
        </div>
    )
}

export default Checkout

