import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./App.css"

function RatingModal({ show, handleClose, handleSubmit }) {

    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        setRating(index);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Rate this product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${star <= rating ? 'yellow' : ''}`}
                            onClick={() => handleStarClick(star)}
                            style={{ fontSize: '2em', cursor: 'pointer' }}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSubmit(rating)}>
                    Submit Rating
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RatingModal;