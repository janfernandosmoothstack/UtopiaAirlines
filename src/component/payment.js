// Contact.js

import React from 'react';  

export const Payment = () => {
  
  return (
    <React.Fragment>

      <h2>Payment</h2>
         
      <form>
        
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Name On Card</label>
      <div class="col-sm-5">
        <input type="email" class="form-control" id="inputEmail" placeholder="Name"/>
      </div>
      </div>


      <div class="form-group row">
        <label for="inputEmail10" class="col-sm-2 col-form-label">Card Type</label>
      <div class="col-sm-1">
      <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
      <label class="custom-control-label" for="customRadioInline1">Visa</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadioInline2">Master</label>
      </div>
      </div>

      <div class="form-group row">
        <label for="inputEmail1" class="col-sm-2 col-form-label">Card Number</label>
      <div class="col-sm-5">
        <input type="email" class="form-control" id="inputEmail1" placeholder="Card Number"/>
      </div>
      </div>
      <br></br>

      <div class="form-group row">
        <label for="start" class="col-sm-2 col-form-label">Start month:</label>
        <label for="inputEmail1" class="col-sm-2 col-form-label">Expiration Date</label>
      <div class="col-sm-5">
      <input type="month" id="start" name="start"
       min="2018-03" value="2018-05"/>
      </div>
      </div>
      <br></br>

      <div class="form-group row">
        <label for="inputEmail2" class="col-sm-2 col-form-label">Security Code</label>
      <div class="col-sm-1">
        <input type="email" class="form-control" id="inputEmail2" placeholder="CVC"/>
      </div>
      </div>
      <br></br>

      <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
  
      </form>

  </React.Fragment>
    );
  }

