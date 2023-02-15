import React from 'react';

class Checkout extends React.Component {
    constructor () {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            zipCode: "",
        }
    }

    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }

    handleLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value})
    }

    handleZipCode = (event) => {
        this.setState({ zipCode: event.target.value})
    }

    render () {
        const {handleCheckout} = this.props

  return (
    <div className="check-out">
      <form>
        <label>First Name</label>
       <input type='text' id="firstName" name="firstName" required onChange={this.handleFirstName}></input>
        <label>Last Name</label>
       <input type='text' id="lastName" name="lastName" required onChange={this.handleLastName}></input>
        <label>Email</label>
        <input type='text' id="email" name="email" required onChange={this.handleEmail}></input>
        <label>Zip Code</label>
        <input type="text" id="zipCode" name="zipCode" required onChange={this.handleZipCode}></input>
		<input type='submit' value='Submit'></input>
      </form>
    </div>
  );
};
}


export default Checkout;
