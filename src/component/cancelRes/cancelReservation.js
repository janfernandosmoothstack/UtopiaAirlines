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
      <form>

        <div class="form-group row">
          <label for="reservationId" class="col-sm-2 col-form-label" className="labelStyle">Confirmation Number</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="reservationId" placeholder="Confirmation Number" />
          </div>
        </div>

        <div class="form-group row">
            <button type="submit" style={button}>View Booking</button>
        </div>
        
        <br></br><br></br><br></br>

        <div class="form-group row">
            <button type="submit" style={button}>Delete</button>
            <Link to="/"><button type="submit" style={button}>Return to home page</button></Link> 
        </div>

      </form>

    </React.Fragment>
  );
}