function Checkout({ setCartQueue, setDiscount }) {

    function handleSubmit(event) {
        event.preventDefault();
            window.alert("You have adopted birds. Thank you!");
        setCartQueue([]);
        setDiscount(0);
    }

    return(
        <form className="Checkout" onSubmit={handleSubmit}>
            <h2>Checkout</h2>
                <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required />
                <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required />
                <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" pattern="[0-9]*" />
            <input type="submit" id="submit"/>
        </form>
    )
}

export default Checkout