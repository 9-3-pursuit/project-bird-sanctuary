import { useState } from "react";

export default function Checkout() {
    const [firstName, setFirstName] = useState({})
    const [lastName, setLastName] = useState({})
    const [email, setEmail] = useState({})
    const [zipCode, setZipCode] = useState({})
    const [submit, setSubmit] = useState({})

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleZipCodeChange(event) {
        setZipCode(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        setSubmit(event.target.value)
        alert("You have adopted birds. Thank you!")

    }
    return (
        <div>
            <h3>Checkout
                <form onSubmit={handleSubmit}>
                    <h6>
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={handleFirstNameChange}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={handleLastNameChange}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={handleEmailChange}
                        />
                        <input
                            type="text"
                            placeholder="Zip Code"
                            onChange={handleZipCodeChange}
                        />
                        <button>Submit</button>
                    </h6>
                </form>
            </h3>
        </div>
    )
}

// what the user will input about the birds
// import from bird card
// pull bird array (birds.js) info