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

export const Payment = () => {
  
  return (
    <React.Fragment>
      
      <h2 style={header}>Payment</h2>
      <br></br> 
      <form>
        
      <div class="form-group row">
        <label for="cardName" class="col-sm-2 col-form-label" style={style}>Name On Card</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="cardName" placeholder="Name" />
      </div>
      </div>


      <div class="form-group row">
        <label for="cardType" class="col-sm-3 col-form-label" style={style}>Card Type</label>
      <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
      <label class="custom-control-label" for="customRadioInline1">
      <img  width="60px" height="60px" src="https://img.icons8.com/clouds/100/000000/visa.png"/>
      </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadioInline2"></label>
        <img width="60px" height="60px" src="https://img.icons8.com/cute-clipart/64/000000/mastercard.png"></img>
      </div>
      </div>

      <div class="form-group row">
        <label for="cardNumber" class="col-sm-2 col-form-label" style={style}>Card Number</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="cardNumber" placeholder="Card Number"/>
      </div>
      </div>

      <div class="form-group row">
        <label for="start" class="col-sm-2 col-form-label" style={style}>Expiration Date</label>
      <div class="col-sm-5">
      <input type="month" id="start" name="start"
       min="2018-03" />
      </div>
      </div>

      <div class="form-group row">
        <label for="securityCode" class="col-sm-2 col-form-label" style={style}>Security Code</label>
      <div class="col-sm-1">
        <input type="text" class="form-control" id="securityCode" placeholder="CVC"/>
      </div>
      </div>

      {
      //BILLING
      }

      <h2 style={header}>Billing Address</h2>
      <br></br> 

      <div class="form-group row">
        <label for="address1" class="col-sm-2 col-form-label" style={style}>Address</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="address1" placeholder="1234 Main St" />
      </div>
      </div>

      <div class="form-group row">
        <label for="city" class="col-sm-2 col-form-label" style={style}>City</label>
      <div class="col-sm-3">
        <input type="text" class="form-control" id="city" placeholder="Name of the City"/>
      </div>
      </div>

      <div class="form-group row">
        <label for="state" class="col-sm-2 col-form-label" style={style}>State</label>
      <div class="col-sm-2">
        <select id="inputState" class="form-control">
          <option selected>Pick State...</option>
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

      <div class="form-group row">
        <label for="city" class="col-sm-2 col-form-label" style={style}>Zip Code</label>
      <div class="col-sm-1">
        <input type="text" class="form-control" id="city" placeholder="6 digits"/>
      </div>
      </div>

    <br></br>
    <button type="submit" style={button}>Continue to Review</button>
    <br></br><br></br><br></br>

      </form>

  </React.Fragment>
    );
  }

