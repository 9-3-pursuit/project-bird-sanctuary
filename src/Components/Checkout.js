import { useState } from "react";

export default function Checkout() {

    const initialContact = {
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",

    }

    const [contactInfo, setContactInfo] = useState(initialContact)

    function handleContactInfo(event) {
        setContactInfo({ ...contactInfo, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setContactInfo(initialContact)
        alert("You have adopted birds. Thank you!")

    }
    return (
        <div>
            <h3>Checkout
                <form onSubmit={handleSubmit}>
                    <h6>
                        <input
                            id="firstName"
                            value={contactInfo.firstName}
                            type="text"
                            placeholder="First Name"
                            onChange={handleContactInfo}
                            required
                        />
                        <input
                            id="lastName"
                            value={contactInfo.lastName}
                            type="text"
                            placeholder="Last Name"
                            onChange={handleContactInfo}
                            required
                        />
                        <input
                            id="email"
                            value={contactInfo.email}
                            type="text"
                            placeholder="Email"
                            onChange={handleContactInfo}
                            required
                        />
                        <input
                            id="zipCode"
                            value={contactInfo.zipCode}
                            type="text"
                            placeholder="Zip Code"
                            onChange={handleContactInfo}
                            required
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