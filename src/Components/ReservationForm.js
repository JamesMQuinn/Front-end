import React, { Component } from 'react';
import './ReservationForm.css';
import axios from 'axios';
import Moment from 'react-moment';

class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cabin: "Cabin 1",
            name: [],
            CheckIn: "mm/dd/yyyy",
            CheckOut: "mm/dd/yyyy"
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    badDates() {
        PopStateEvent("What")

    }

    onSubmit(e) {
        e.preventDefault();

        const details = {
            name: this.state.name,
            cabin: this.state.cabin,
            CheckIn: new Date(this.state.CheckIn),
            CheckOut: new Date(this.state.CheckOut)
        };

        axios.put('http://localhost:2345/AddReservation', {details})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
/*
        fetch('http://localhost:2345/AddReservation', {
            method: 'POST',
            mode: "no-cors",
            name: "AddReservationRequest",
            headers: {
                'Accept': 'application/json',
                'dataMode':'params'
            },
            body: JSON.stringify(details)
        })
        .then(console.log(JSON.stringify(details)));*/
    };

    render() {
        return (
            <div>
                <h1>Welcome to Lonely Lake</h1>
                <div class="options">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            Cabin: <select name="cabin" onChange={this.onChange}>
                                <option value="Cabin 1">First Cabin</option>
                                <option value="Cabin 2">Second Cabin</option>
                                <option value="Cabin 3">Third Cabin</option>
                            </select><br />
                        </div>
                        <div>
                            Name:  <input type="text" name="name" onChange={this.onChange} required="Required"></input><br />
                            Check-In Time:  <input type="date" name="CheckIn" onChange={this.onChange} required="Required"></input><br />
                            Check-Out Time:  <input type="date" name="CheckOut" onChange={this.onChange} required="Required"></input><br />
                            <button type="Submit" disabled={this.state.CheckIn > this.state.CheckOut ? true : false}>Submit</button>
                            {this.state.CheckIn > this.state.CheckOut ? 
                                <div class="alert">Check-Out time cannot be before Check-In time</div> : ""}</div>
                    </form>
                </div>{this.state.checkIn}
            </div>
        );
    }
}

export default ReservationForm;