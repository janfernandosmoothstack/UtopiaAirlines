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
      

      <div className="form-group row" >
        <label className="col-sm-2 col-form-label" style = {move}>First Name</label>
      <div className="col-sm-5">
        <input type="text" className="form-control" placeholder="First Name" />
      </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" style = {move}>Last Name</label>
      <div className="col-sm-5">
        <input type="text" className="form-control" placeholder="Last Name"/>
      </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" style = {move}>Phone Number</label>
      <div className="col-sm-5">
        <input type="tel" className="form-control" placeholder="Phone Number"/>
      </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" style = {move}>Email</label>
      <div className="col-sm-5">
        <input type="email" className="form-control" placeholder="Email"/>
      </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" style = {move}>DOB</label>
      <div className="col-sm-5">
        <input type="date" className="form-control" />
      </div>
      </div>
      <button type="button" className= {"rounded btn border border-dark"} style = {move}>Continue to Payment</button>
    </Form>
    </React.Fragment>
);
}