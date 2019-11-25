import React from 'react';
import './cancelReservation.css';
import { Link } from 'react-router-dom';

const button = {
  backgroundColor: "#3C5E83",
  border: "none",
  color: "white",
  padding: "6px 10px",
  textAlign: "center",
  display: "inline-block",
  //marginLeft: "550px",
  borderRadius: "5px",
  fontSize: "20px"
};
const text = {
  //textAlign: "center",
  marginLeft: "450px",
  color: "white",
  fontSize: "20px"
}
const button1 = {
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

export const CancelReservation = () => {

  return (
    <React.Fragment>

      <div className="headerContainer">
        <div className="headertext">
          <h2>Cancel Reservation</h2>
        </div>
      </div>

      <br></br>
      <form >
        <div class="form-inline">
          <div class="form-group mb-2">
            <label for="reservationId" class="col-2 col-form-label" className="labelStyle">Confirmation Number</label>
            <input class="form-control" type="text" placeholder="Confirmation Number" id="reservationId" />
          </div>
          <div class="form-group mx-sm-1 mb-1">
          </div>
          <button type="submit" class="btn btn-primary mb-2" style={button}>View Booking</button>
         
       
        </div>
        <br></br>
        <br></br><br></br><br></br>
        <p style={text}> Ticket information appears here</p>

        <br></br>
        <br></br><br></br><br></br>

        <Link to="/"><button type="submit" style={button1}>Delete</button></Link>


      </form>

    </React.Fragment>
  );
}