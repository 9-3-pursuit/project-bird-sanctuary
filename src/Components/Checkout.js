function Checkout ({cart, setMyCart}) {
    function handleSubmit(event) {
        event.preventDefault();
        
            window.alert("You have adopted birds. Thank you!")
        
        event.target.fname.value = '';
        event.target.lname.value = '';
        event.target.email.value = '';
        event.target.zipcode.value = '';
    setMyCart({total: 0, discount: false, adopted:[]})
}

    return(
        <div className= 'Checkout'>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <label htmlFor="fname">First Name</label>
                    <input type='firstName' id='fname' name='fname' required></input>
                <label htmlFor="lname">Last Name</label>
                    <input type='lastName' id='lname' name='lname' required></input>
                <label htmlFor="email">Email</label>
                    <input type='email' id='email' name='email' required></input>
                <label htmlFor="zipcode">Zip Code</label>
                    <input type='zipCode' id='zipcode' name='zipcode' required></input>
                    <br></br>
                    <input type='submit' />
            </form> 
        </div>
    )
};
export default Checkout;

