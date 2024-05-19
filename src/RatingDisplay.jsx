import React, { useState } from 'react';
import './App.css';
import StarComponent from './components/Star';
import RatingModal from './RatingModal';

function RatingDisplay() {
    const [showModal, setShowModal] = useState(false);
    const [ratings, setRatings] = useState([]);
    const [totalRating, setTotalRating] = useState();

    const [averageRating, setAverageRating] = useState();


    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmitRating = async(newRating) => {
        setRatings((prevRatings) =>{
            const updatedRating = [...prevRatings, newRating];
            const newTotalRating = updatedRating.reduce((sum, rating) => sum + rating, 0);
            setTotalRating(newTotalRating);
            const newAverageRating = newTotalRating / updatedRating.length;
            setAverageRating(newAverageRating.toFixed(1));
            return updatedRating;
        })
        handleCloseModal();
        alert(`You rated ${newRating} out of 5`);
        alert(`Rating Average is ${averageRating} out of 5`);
    };

    return (
        <>
            <div className='RatingDisplay'>
                <div className="topbar">Hello</div>

                <div className='header'>
                    <h2>Products Ratings</h2>
                    <p>Welcome to the Rating Demonstration App.
                        This website is designed to showcase how star ratings are implemented and displayed on e-commerce platforms. The goal is to provide a clear example of how user reviews and ratings contribute to the overall evaluation of products and services.</p>
                    <div className="line-div">
                        <div className='line'></div>
                        <p>Rating and Reviews</p>
                        <div className='line'></div>
                    </div>
                </div>
                <div className='cards-div'>
                    <div className='card watch-card'>
                        <img src="shirt.png" alt="" />
                        <div className='card-content'>
                            <h4>Shirt</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dignissimos, deserunt .</p>
                            <h4>$60</h4>
                            <h5>Rating : 1.5</h5>
                            <StarComponent reviews={averageRating ? averageRating : 0.0} />
                        </div>
                        <div onClick={() => handleOpenModal()} className="footer">Rate This Product</div>
                        <RatingModal
                            show={showModal}
                            handleClose={handleCloseModal}
                            handleSubmit={handleSubmitRating}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RatingDisplay;