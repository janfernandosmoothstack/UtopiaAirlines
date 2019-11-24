import React from 'react';
import './payment.css';
import './visa.css';
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


export const Payment = () => {

  return (
    <React.Fragment>

      <div className="headerContainer">
        <div className="headertext">
          <h2 >Payment</h2>
        </div>
      </div>

      <br></br>
      <form>

        <div class="form-group row">
          <label for="cardName" class="col-sm-2 col-form-label" className="labelStyle">Name On Card</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="cardName" placeholder="Name" />
          </div>
        </div>


        <div class="form-group row">
          <label for="cardType" class="col-sm-3 col-form-label" className="labeltext">Card Type</label>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
            <label class="custom-control-label" for="customRadioInline1">
              <img width="60px" height="60px" src="https://img.icons8.com/color/96/000000/visa.png" />
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
            <label class="custom-control-label" for="customRadioInline2"></label>
            <img width="60px" height="60px" src="https://img.icons8.com/officel/100/000000/mastercard.png" />
          </div>
        </div>

        <div class="form-group row">
          <label for="cardNumber" class="col-sm-2 col-form-label" className="labelStyle">Card Number</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="cardNumber" placeholder="Card Number" />
          </div>
        </div>


        <div class="form-group row">
          <label for="start" class="col-2 col-form-label" className="labelStyle">Expiration Date</label>
          <div class="col-sm-5">
            <input class="form-control" type="month" id="start" />
          </div>
        </div>

        <div class="form-group row">
          <label for="securityCode" class="col-sm-2 col-form-label" className="labelStyle">Security Code</label>
          <div class="col-sm-1">
            <input type="text" class="form-control" id="securityCode" placeholder="CVC" />
          </div>
        </div>

        {
          //BILLING
        }

        <div className="headerContainer">
          <div className="headertext">
            <h2 className="header">Billing Address</h2>
          </div>
        </div>
        <br></br>

        <div class="form-group row">
          <label for="address1" class="col-sm-2 col-form-label" className="labelStyle">Address</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="address1" placeholder="1234 Main St" />
          </div>
        </div>

        <div class="form-group row">
          <label for="city" class="col-sm-2 col-form-label" className="labelStyle" >City</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="city" placeholder="Name of the City" />
          </div>
        </div>

        <div class="form-group row">
          <label for="state" class="col-sm-2 col-form-label" className="labelStyle">State</label>
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
          <label for="city" class="col-sm-2 col-form-label" className="labelStyle">Zip Code</label>
          <div class="col-sm-1">
            <input type="text" class="form-control" id="city" placeholder="6 digits" />
          </div>
        </div>

        <br></br>
        <Link to="/confirmation"><button type="submit" style={button}>Continue to Review</button></Link>
        
        <br></br><br></br><br></br>

      </form>

    </React.Fragment>
  );
}

