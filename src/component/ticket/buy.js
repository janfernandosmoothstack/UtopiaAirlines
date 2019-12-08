
import React from 'react';

const buttonStyle = {
    backgroundColor: "#48A1A3",
    border: "none",
    color: "white",
    display: "inline-block",
    borderRadius: "5px",
    fontSize: "20px",
    padding: "5px 10px 5px 10px"
}

//Functional Component; handle set, close are for showing and cllsing modal
export const Buy = (props) => {

    function travelerPage() {
        window.location.href = "http://localhost:3000/#/traveler";
    };

    const handleSubmit = () => {
        this.props.ticket.selectedTicketList.push(props.ticket);
    }

    return (
        <React.Fragment>
            <button type="button" style={buttonStyle} onClick={() => {handleSubmit(); travelerPage();}}>Select</button>
        </React.Fragment>
    );
}


