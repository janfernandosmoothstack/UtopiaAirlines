
import React from 'react';
import { Link } from 'react-router-dom';
import './home/home.css';

const button = {
    backgroundColor: "#3C5E83",
    border: "none",
    color: "white",
    padding: "6px 10px",
    textAlign: "center",
    display: "inline-block",
    marginLeft: "550px",
    borderRadius: "5px",
    fontSize: "20px"
};

export const Confirmation = (props) => {
    console.log("I am in confirmation");
    console.log("This the traveler record");
    console.log(props.traveler.travelerList);
    console.log("This is the reservation record");
    console.log(props.reservation.reservationList);
    console.log("this is the ticket record" );
    console.log(props.ticket.ticketList);

    return (
        <React.Fragment>
            <div className="headerContainer">
                <div className="headerText">
                    <h1>TICKET HAS BEEN BOOKED</h1>
                </div>
            </div>
            <br></br>
            <Link to="/"><button type="button" style={button}>Return to Home Page</button></Link>

        </React.Fragment>
    );
}