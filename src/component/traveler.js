import React from 'react';
import { Form } from 'react-bootstrap';
export const Traveler = () => {

return(
    <React.Fragment>
    <Form>
      <h2> <u> Traveler Info </u> </h2>

        <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
          
            <span class="input-group-text">First Name: </span>
            <input type="text" class="form-control" /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="input-group-text">Last Name: </span>
            <input type="text" class="form-control" /> 
            <br></br>
            </div>
          </div>
      
            <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">Phone Number:  </span>
            <input type="tel" class="form-control" /> 
            <br></br>
            </div>
        </div> 

            <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
    
            <span class="input-group-text">Email: </span>
            <input type="email" class="form-control" />  
            <br></br>
            </div>
        </div>
         
            <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">DOB:  </span>
            <input type="date" class="form-control" />  
            <br></br>
            </div>
        </div>
         
            <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
            <input type="submit" value="Continue to Payment" />
        </div>
        </div>
    </Form>
    </React.Fragment>
);
}