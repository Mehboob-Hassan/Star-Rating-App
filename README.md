
# ⭐ Star Rating Demo App

## Purpose
The Star Rating Demo App is designed to demonstrate how a star rating system works in a React application. It showcases the following functionalities:

- How users can submit ratings using a star-based interface.

- How the average rating is calculated based on user inputs.

- How the star rating is visually represented based on the calculated average.

- Displaying real-time updates to the rating statistics.

## Features
- Interactive Star Ratings: Users can click on stars to submit their ratings.
- Real-Time Calculations: The app calculates and updates the average rating in real-time.
- Responsive UI: A user-friendly interface with a responsive modal for rating submissions.
- Alerts: Informative alerts to show the user's rating and the current average rating.

## Installation
To run this app locally, follow these steps:

1. Clone the repository
```bash
  git@github.com:Mehboob-Hassan/Star-Rating-App.git
```

2. Navigate to the project directory:
```bash
  cd Star-Rating-App
```

3. Install dependencies:
```bash
  npm install
```

4. Run the app
```bash
  npm start
```

# Implementation Guide
### Step 1: Set Up the Project
First, set up a new React project (if you haven't already):
```bash
  npx create-react-app Star-Rating-App
  cd Star-Rating-App
```

### Step 2: Install Required Packages
We'll use React Bootstrap for the UI components:
```bash
  npm install react-bootstrap bootstrap
```

Add Bootstrap CSS to your index.js file:
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Step 3: Create the Rating Display Component
Create a new file RatingDisplay.js:

~ This file contains the main display for the app, including the modal to submit ratings.

```
import React, { useState } from 'react';
import './App.css';
import StarComponent from './components/Star';
import RatingModal from './RatingModal';

// Main display component
function RatingDisplay() {
    const [showModal, setShowModal] = useState(false);
    const [ratings, setRatings] = useState([]);
    const [totalRating, setTotalRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    // Function to open the modal
    const handleOpenModal = () => setShowModal(true);
    
    // Function to close the modal
    const handleCloseModal = () => setShowModal(false);

    // Function to handle the submission of a new rating
    const handleSubmitRating = async(newRating) => {
        setRatings((prevRatings) => {
            const updatedRating = [...prevRatings, newRating];
            const newTotalRating = updatedRating.reduce((sum, rating) => sum + rating, 0);
            setTotalRating(newTotalRating);
            const newAverageRating = newTotalRating / updatedRating.length;
            setAverageRating(newAverageRating.toFixed(1));
            return updatedRating;
        });
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
                        <img src="shirt.png" alt="Shirt" />
                        <div className='card-content'>
                            <h4>Shirt</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dignissimos, deserunt.</p>
                            <h4>$60</h4>
                            <h5>Rating: {averageRating ? averageRating : 0.0}</h5>
                            <StarComponent reviews={averageRating ? averageRating : 0.0} />
                        </div>
                        <div onClick={handleOpenModal} className="footer">Rate This Product</div>
                        <RatingModal
                            show={showModal}
                            handleClose={handleCloseModal}
                            handleSubmit={handleSubmitRating}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RatingDisplay;
```


### Step 4: Create the Star Component:
~ This file will contain the StarComponent used to display the star ratings.

```
// src/components/Star.jsx
import React from 'react';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';

// Star component to display full, half, and empty stars based on the rating
function StarComponent({ reviews }) {
    const fullStars = Math.floor(reviews);
    const halfStars = reviews % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    return (
        <div>
            {/* Render full stars */}
            {Array.from({ length: fullStars }).map((_, index) => (
                <Star key={`full-${index}`} style={{ color: 'gold' }} />
            ))}
            {/* Render half star if needed */}
            {halfStars && <StarHalf key="half" style={{ color: 'gold' }} />}
            {/* Render empty stars */}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <StarBorder key={`empty-${index}`} style={{ color: 'gold' }} />
            ))}
        </div>
    );
}

export default StarComponent;

```

### Step 5: Create the Rating Model Component:
~ This file will contain the code to show the model used to collect ratings from the user.

```
// src/RatingModal.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./App.css";

// Modal component to handle star rating submission
function RatingModal({ show, handleClose, handleSubmit }) {
    const [rating, setRating] = useState(0);

    // Function to handle star click and update the rating state
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
    );
}

export default RatingModal;

```

### Step 6: Use the RatingDisplay Component in App.js:
```
import './App.css';
import RatingDisplay from './RatingDisplay';

function App() {
  return (
    <div className='App'>
      <div className='topbar'>Hello</div>
        <RatingDisplay />
    </div>
  );
}

export default App;

```


## Future Improvements
Here are some ideas for future improvements:

- Backend Integration: Connect the app to a backend server to store and retrieve ratings from a database.
- User Authentication: Implement user authentication to allow users to see their own ratings.
- Enhanced UI: Improve the UI/UX with animations and more detailed feedback.


## Follow Us
Follow Me on Github: https://github.com/Mehboob-Hassan



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mehboob-hassan.github.io/mhPortfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mehboob-hassan-01806a263/)



