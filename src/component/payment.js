// Contact.js

import React from 'react';  

export const Payment = () => {
  
  return (
    <React.Fragment>

      <h2>Payment</h2>
         
      <form>
        
      <div class="form-group row">
        <label for="cardName" class="col-sm-2 col-form-label">Name On Card</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="cardName" placeholder="Name"/>
      </div>
      </div>


      <div class="form-group row">
        <label for="cardType" class="col-sm-3 col-form-label">Card Type</label>
      <div class="col-sm-1">
      <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
      <label class="custom-control-label" for="customRadioInline1">
      <img src="https://img.icons8.com/clouds/100/000000/visa.png"/>
      </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadioInline2"></label>
        <img src="https://img.icons8.com/cute-clipart/64/000000/mastercard.png"/>
      </div>
      </div>

      <div class="form-group row">
        <label for="cardNumber" class="col-sm-2 col-form-label">Card Number</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="cardNumber" placeholder="Card Number"/>
      </div>
      </div>
      <br></br>

      <div class="form-group row">
        <label for="start" class="col-sm-2 col-form-label">Expiration Date</label>
      <div class="col-sm-5">
      <input type="month" id="start" name="start"
       min="2018-03" />
      </div>
      </div>
      <br></br>

      <div class="form-group row">
        <label for="securityCode" class="col-sm-2 col-form-label">Security Code</label>
      <div class="col-sm-1">
        <input type="text" class="form-control" id="securityCode" placeholder="CVC"/>
      </div>
      </div>
      <br></br>

      <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-danger">Submit</button>
    </div>
  </div>
  
      </form>

  </React.Fragment>
    );
  }

