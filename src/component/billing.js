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
    textAlign:"center"
  };

const button = {
  backgroundColor:"#3C5E83",
  border:"none",
  color:"white",
  padding:"6px 10px",
  textAlign:"center",
  textDecoration:"none",
  display:"inline-block",
  marginLeft: "18px",
  borderRadius:"5px",
  fontSize:"20px"
};

const header = {
  textAlign:"center",
  marginLeft: "18px",
  fontSize:"40px",
  color: "white"
};

export const Billing = () => {
  
  return (
    <React.Fragment>

      
      <h2 style={header}>Billing Address</h2>
      <br></br> 
      <form>
 
      <div class="form-group row">
        <label for="address1" class="col-sm-2 col-form-label" style={style}>Address</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" id="address1" placeholder="1234 Main St" />
      </div>
      </div>

  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity" style={style1}>City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="Name of the City"/>
    </div>

    <div class="form-group col-md-2">
      <label for="inputState" style={style1}>State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
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

    <div class="form-group col-md-1">
      <label for="inputZip" style={style1}>Zip</label>
      <input type="text" class="form-control" id="inputZip" placeholder="6 digits"/>
    </div>
  </div>
  
  <br></br>
  <br></br>
  <button type="submit" style={button}>Continue to Review</button>
</form>
  

  </React.Fragment>
    );
  }

