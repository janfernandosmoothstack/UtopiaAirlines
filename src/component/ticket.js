import React from 'react';
import { Form } from 'react-bootstrap';

export const Ticket = () => {

return(
    <React.Fragment>
    <Form>
        
        <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
     
            <span class="input-group-text">From: </span>
            <input type="text" class="form-control" /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="input-group-text">To: </span>
            <input type="text" class="form-control" /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="input-group-text">Departure Date:  </span>
            <input type="date" class="form-control" />  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="input-group-text">Return Date: </span>
            <input type="date" class="form-control" />  
    
        </div>
        </div>
    </Form>

    <div>
        <table class="table table-dark table-hover" >
                    <thead>
                        <tr>
                            <th >FlightNo </th>
                            <th>Depart Time</th>
                            <th>Arrival Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>    
                </table>
    </div>
    </React.Fragment>
);
}