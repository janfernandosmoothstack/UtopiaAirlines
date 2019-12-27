import React from 'react';
import ReservationActions from '../../actions/reservationActions';

const button = {
    backgroundColor: "#48A1A3",
    border: "none",
    color: "white",
    padding: "6px 10px",
    textAlign: "center",
    display: "inline-block",
    marginLeft: "550px",
    borderRadius: "5px",
    fontSize: "20px",
    marginTop: "30px",
    fontWeight: "bold"
};

export const DeleteBtn = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        ReservationActions.deleteReservation(props.reservationId);
    };

    return (
        <React.Fragment>
            <button className="btn-danger" style={btnStyle} onClick={handleShow}>Delete</button>

            <Modal show={show} onHide={handleClose} centered>
                
                <Modal.Header closeButton>
                    <Modal.Title>Delete Booking</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                    <div className="form-group">
                        <label>Are you sure you want to delete this booking?</label>
                    </div>

                    <button className="btn-danger" type="submit" style={btnStyle} onClick={(event) => {handleSubmit(event);handleClose();}}>Delete</button>
                    
                </Modal.Body>

            </Modal>

        </React.Fragment>
    );
}