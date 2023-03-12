export default function Checkout ({updateCart,setBonus}) {
    function submitForm (){
        updateCart([])
        setBonus([])
        alert("You have adopted birds. Thank you!")
    }
    return (
        <>
        <form onSubmit={submitForm} className="Checkout">
            <label for="first-name">First Name<input required type="text" id="first-name"></input></label>
            <label for="last-name">Last Name<input required id="last-name" type="text"></input></label>
            <label for="email">Email<input required id="email" type="email"></input></label>
            <label for="zip-code">Zip Code<input required id="zip-code" type="text"></input></label>
            <label><input type="submit"></input></label>
        </form>
        </>
    )
}