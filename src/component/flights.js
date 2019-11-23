// Contact.js

import React from 'react';  

const style = {
  marginLeft: "18px",
  fontSize:"20px",
  color: "white"
};

const style1 = {
  marginLeft: "18px",
  fontSize:"20px",
  color: "white",
};

const button = {
  backgroundColor:"#3C5E83",
  border:"none",
  color:"white",
  padding:"6px 10px",
  textAlign:"center",
  textDecoration:"none",
  display:"inline-block",
  marginLeft: "530px",
  borderRadius:"5px",
  fontSize:"20px"
};

const header = {
  textAlign:"center",
  marginLeft: "18px",
  fontSize:"40px",
  color: "white"
};

export const Flights = () => {
  
  return (
    <React.Fragment>
      
      <h2 style={header}>Book a Flight</h2>
      <br></br> 
      <form>
        
      <div class="form-group row">
        <label for="cardType" class="col-sm-2 col-form-label" style={style}>Flight Type :</label>
      <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
      <label class="custom-control-label" for="customRadioInline1" style={style}>
      <img width="60px" height="60px" src="https://img.icons8.com/dusk/64/000000/circular-arrows.png"/>
      </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadioInline2"></label>
        <img width="60px" height="60px" src="https://img.icons8.com/doodle/48/000000/one-way-road-sign.png"></img>
      </div>
      </div>

        <br></br>
        <div class="form-group row">
            <label for="example-date-local-input" class="col-2 col-form-label" style={style}>Depart Date</label>
        <div class="col-2">
            <input class="form-control" type="date" value="2011-08-19" id="example-date-local-input"/>
        </div>
            <label for="depart" class="col-2 col-form-label" style={style}>Return Date</label>
        <div class="col-2">
            <input class="form-control" type="date" value="2011-08-19" id="depart"/>
        </div>
        </div>

        <br></br>
        <div class="form-group row">
            <label for="fromLocation" class="col-2 col-form-label" style={style}>Flying From</label>
        <div class="col-2">
        <select id="fromLocation" class="form-control">
          <option selected>departing from...</option>
          <option>Alabama</option><option>Alaska</option><option>Arizona</option><option>Arkansas</option>
          <option>California</option><option>Colorado</option><option>Connecticut</option><option>Delaware</option>
          <option>Florida</option><option>Georgia</option><option>Hawaii</option><option>Idaho</option><option>Illinois</option>
          <option>Indiana</option><option>Iowa</option><option>Kansas</option><option>Kentucky</option>
          <option>Louisiana</option><option>Maine</option><option>Maryland</option><option>Massachusetts</option><option>Michigan</option>
          <option>Minnesota</option><option>Mississippi</option><option>Missouri</option><option>MontanaNebraska</option>
          <option>Nevada</option><option>New Hampshire</option><option>New York</option><option>South Carolina</option><option>Texas</option>
          <option>Virginia</option><option>Washington</option>
        </select>
        </div>
            <label for="toLocation" class="col-2 col-form-label" style={style}>Flying To</label>
        <div class="col-2">
        <select id="toLocation" class="form-control">
          <option selected>arriving at...</option>
          <option>Alabama</option><option>Alaska</option><option>Arizona</option><option>Arkansas</option>
          <option>California</option><option>Colorado</option><option>Connecticut</option><option>Delaware</option>
          <option>Florida</option><option>Georgia</option><option>Hawaii</option><option>Idaho</option><option>Illinois</option>
          <option>Indiana</option><option>Iowa</option><option>Kansas</option><option>Kentucky</option>
          <option>Louisiana</option><option>Maine</option><option>Maryland</option><option>Massachusetts</option><option>Michigan</option>
          <option>Minnesota</option><option>Mississippi</option><option>Missouri</option><option>MontanaNebraska</option>
          <option>Nevada</option><option>New Hampshire</option><option>New York</option><option>South Carolina</option><option>Texas</option>
          <option>Virginia</option><option>Washington</option>
        </select>
        </div>
        </div>

        <br></br>
        <div class="form-group row">
            <label for="numberTravelers" class="col-2 col-form-label" style={style}>Number of Travelers</label>
        <div class="col-2">
        <select id="fromLocation" class="form-control">
          <option selected>No. of Travelers</option>
          <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
          </select>
        </div>
        </div>

 
    <br></br>
    <button type="submit" style={button}>Search</button>
    <br></br><br></br><br></br>

      </form>

  </React.Fragment>
    );
  }

