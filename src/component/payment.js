// Contact.js

import React from 'react';  

export const Payment = () => {
  
    return (
      <React.Fragment>
          <h2>Payment</h2>
          <form>
      <label>
          Name on Card  :
          <input type="text" name="cardName" />
      </label>
      <br></br>
      <br></br>
      <label>
          Card Type  :
          <input type="radio" name="cardType" />
      </label>
      <br></br>
      <br></br>
      <label>
          Card Number :
          <input type="text" name="cardNumber" />
      </label>
      <br></br>
      <br></br>
      <label>
          Expiration Date :
          <input type="text" name="expDate" />
      </label>
      <br></br>
      <br></br>
      <label>
          Security Code :
          <input type="text" name="securityCode" />
      </label>
      <br></br>
      <br></br>
      <button style={{ backgroundColor: 'green' }} variant="primary" >
    Submit
      </button>
  </form>
  </React.Fragment>
    );
  }

