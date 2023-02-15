export default function Checkout () {
    const clear = () => {
        alert("You have adopted birds. Thank you!")
        }   
   
    return (
        <div className="Checkout">
            <form onSubmit={clear}>
                <h2>Checkout</h2> 
                <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                    />
                <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                    />
                <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                    />
                <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                    />
                    <br />
                <input type="submit" />
            </form>
        </div>
    );
  }