import React from 'react';
import { Form } from 'react-bootstrap';

  const move = {
    marginLeft: "18px",
    fontSize:"25px",
    color: "white"
  };

  const head = {
    marginLeft: "18px",
    fontSize:"50px",
    color: "white"
  };
export const Traveler = () => {

return(
    <React.Fragment>
    <Form>
      <h1 style = {head}>  Traveler Info </h1>
      

      <div class="form-group row" >
        <label class="col-sm-2 col-form-label" style = {move}>First Name</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" placeholder="First Name" />
      </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" style = {move}>Last Name</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" placeholder="Last Name"/>
      </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" style = {move}>Phone Number</label>
      <div class="col-sm-5">
        <input type="tel" class="form-control" placeholder="Phone Number"/>
      </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" style = {move}>Email</label>
      <div class="col-sm-5">
        <input type="email" class="form-control" placeholder="Email"/>
      </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" style = {move}>DOB</label>
      <div class="col-sm-5">
        <input type="date" class="form-control" />
      </div>
      </div>
      <button type="button" class= {"rounded btn border border-dark"} style = {move}>Continue to Payment</button>
    </Form>
    </React.Fragment>
);
}