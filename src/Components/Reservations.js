import React, { Component } from 'react'
import axios from 'axios';
import Moment from 'react-moment';
import './Reservations.css';

class Reservations extends Component {
    state = {
        reservations: []
    }

    componentWillMount() {
        axios.get('http://localhost:2345/getreservations?format=json')
        .then(res => {
            const reservations = res.data.reservations;
            this.setState({ reservations });
            console.log(reservations);
        })
    }

    render() {
        return (
            <div class = "returnedReservations">
                <h1>Reservations</h1>
                <table>
                    <tr><th>Name</th><th>Cabin</th><th>Check In</th><th>Check Out</th></tr>
                    { this.state.reservations.map(reservation => 
                    <tr><td>{reservation.name}</td><td>{reservation.cabin}</td>
                    <td><Moment format="MM/DD/YYYY">{reservation.checkIn}</Moment></td><td><Moment format="MM/DD/YYYY">{reservation.checkOut}</Moment></td></tr>) }
                </table>
            </div>
        )
    }
}

export default Reservations;