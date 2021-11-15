import React, { Component } from "react";


class Form extends Component {
    dt = new Date().toLocaleDateString('en-GB');
    state = {
        firstName: "", lastName: "", email: "", address: "",
        address1: "", city: "", zip: "", batch: "",
        startDate: this.dt,
        endDate: "dd-mm-yyyy",
        Age: '15',
        message: ""
    };

    render() {
        return (
            <div className='container-sm'>
                <h3 className="text-center mb-4">Subscription Form</h3>

                <div>
                    {this.state.message}
                </div>

                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="firstname" className="form-control" placeholder="John"
                            value={this.state.firstName}
                            onChange={(event) => {
                                this.setState({ firstName: event.target.value });
                            }} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastname" className="form-control" placeholder="Doe"
                            value={this.state.lastName}
                            onChange={(event) => {
                                this.setState({ lastName: event.target.value });
                            }} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"
                            placeholder="john@doe.com"
                            value={this.state.email}
                            onChange={(event) => {
                                this.setState({ email: event.target.value });
                            }} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress"
                            placeholder="1234 Main St"
                            value={this.state.address}
                            onChange={(event) => {
                                this.setState({ address: event.target.value });
                            }} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                            value={this.state.address1}
                            onChange={(event) => {
                                this.setState({ address1: event.target.value });
                            }} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"
                            value={this.state.city}
                            onChange={(event) => {
                                this.setState({ city: event.target.value });
                            }} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"
                            value={this.state.zip}
                            onChange={(event) => {
                                this.setState({ zip: event.target.value });
                            }} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Select Batch</label>
                        <select id="inputState" className="form-select" value={this.state.batch}
                            onChange={(event) => {
                                this.setState({ batch: event.target.value });
                            }}>
                            <option>Select...</option>
                            <option value="6to7">6-7AM</option>
                            <option value="7to8">7-8AM</option>
                            <option value="8to9">8-9AM</option>
                            <option value="5to6">5-6PM</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="startDate" className="form-label">Start Date: </label>
                        <input type="date" className="form-control" value={this.state.startDate}
                            onChange={(event) => this.PaymentDate(event.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputAge" className="form-label">Age</label>
                        <input type="number" className="form-control"
                            value={this.state.Age}
                            onChange={(event) => this.verifyAge(event.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="startDate" className="form-label">Next Payment Date: </label>
                        <input type="text" className="form-control" value={this.state.endDate} readOnly />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary float-end" onClick={this.onPaymentClick} >Pay Fee Rs. 500</button>
                    </div>
                </form>
            </div>
        );
    }

    PaymentDate = (startDate) => {
        var date = startDate.split('-');
        var mydate = new Date(date[0], date[1] - 1, date[2])
        var endDate = new Date(mydate);
        endDate.setDate(endDate.getDate() + 31);

        var dd = endDate.getDate();
        var mm = endDate.getMonth() + 1;
        var yyyy = endDate.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var nextPaymentDate = dd + '/' + mm + '/' + yyyy;

        this.setState({ endDate: nextPaymentDate })
        this.setState({ startDate: startDate })
    };

    verifyAge = (Age) => {
        if (Number(Age) <= 65 && Number(Age) >= 15) {
            this.setState({ Age: Age })
        }
    };

    onPaymentClick = async (event) => {
        event.preventDefault()
        var flag = 0;
        if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" ||
            this.state.address === "" || this.state.address1 === "" || this.state.city === "" ||
            this.state.zip === "" || this.state.batch === "") {
            flag = 1;
        }

        if (flag) {
            this.setState({ message: <div className="alert alert-danger" >Error! Please fill all the details.</div > })
        }
        else {
            // code for the payment processs
            // await CompletePayment()
            this.setState({ message: <div className="alert alert-success" >Hurray &#127881;, Payment Successfully</div > })
        }
        console.log(this.state)
    };

}

export default Form;
