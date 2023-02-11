function Checkout () {

    function handleFormSubmit (event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text"></input>
            <label htmlFor="lastNme">Last Name</label>
            <input id="lastName" type="text"></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="text"></input>
            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipcode" type="number"></input>
            <input type="submit"></input>
        </form>
    );
}

export default Checkout;