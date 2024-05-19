
# ⭐ Star Rating Demo App

## Purpose
The Star Rating Demo App is designed to demonstrate how a star rating system works in a React application. It showcases the following functionalities:

- How users can submit ratings using a star-based interface.

- How the average rating is calculated based on user inputs.

- How the star rating is visually represented based on the calculated average.

- How the empty, half, and full stars are shown based on the average:

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

## Functionalities, Code and Descriptions
### 1. How the functionality in the modal works (selecting stars)
```bash
    function RatingModal({ show, handleClose, handleSubmit }) {
    // State to store rating input using stars
    const [rating, setRating] = useState(0)

    // Function to handle star click and update the rating state
    const handleStarClick = (index) => {
        setRating(index);
    };

    return (
        <>
	// Model Code here
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
        // Remaining Code
    );
}
```

### Description:
This code snippet generates a star rating interface where users can click on stars to rate a product.

- Star Array: An array [1, 2, 3, 4, 5] is mapped to create 5 star elements.
- Key Attribute: Each star element is given a unique key.
- ClassName: The className attribute dynamically assigns the class yellow to stars that are less than or equal to the current rating state (clicked index number in simple), making them visually highlighted.
- onClick Event: The onClick event is set to a function handleStarClick that updates the rating state to the clicked star's value.

This dynamic rendering and event handling allow users to interactively rate a product by clicking on the stars, which will visually update to reflect their rating.

### 2. How the submission of the rating is handled
We'll use React Bootstrap for the UI components:

>src/RatingDisplay.jsx
```bash
  
const handleSubmitRating = async (newRating) => {
    setRatings((prevRatings) => {
        const updatedRating = [...prevRatings, newRating];
        const newTotalRating = updatedRating.reduce((sum, rating) => sum + rating, 0);
        setTotalRating(newTotalRating);
        const newAverageRating = newTotalRating / updatedRating.length;
        setAverageRating(newAverageRating.toFixed(1));
        return updatedRating;
    });
    handleCloseModal();
};
```
### Description:
This function handles the submission and processing of a new rating in the app.

- Parameter: newRating represents the rating given by the user.
- Updating Ratings: setRatings updates the ratings state by adding newRating to the existing ratings array.
- updatedRating creates a new array with all previous ratings and the new rating.
#### Calculating Total Rating:
- newTotalRating calculates the sum of all ratings in the updatedRating array using reduce.
#### Setting Total Rating:
- setTotalRating updates the state with newTotalRating.
#### Calculating Average Rating:
- newAverageRating calculates the average rating by dividing the newTotalRating by the number of ratings.
- toFixed(1) ensures the average rating is displayed with one decimal place.

This function ensures that the new rating is incorporated into the existing ratings, calculates the updated average, and provides real-time feedback to the user.






### 3. How the rating is stored and the average is calculated
```
    Handled in same function give in point number 2.
```
#### Description
- newRating is added to the existing ratings array.
- The total rating is recalculated using reduce to sum all ratings.
- Average rating is computed by dividing the total rating by the number of ratings. 
- The average is then updated in the state.

### 4. How the average rating is shown in stars


```
// src/RatingDisplay.jsx
<StarComponent reviews={averageRating ? averageRating : 0.0} />

```

#### Description:
- The StarComponent is used to visually represent the average rating. 
- The reviews prop is passed the averageRating state, which determines how many stars to display.


### 5. How the empty, half, and full stars are shown based on the average:

```
import { Star, StarBorder, StarHalf } from '@mui/icons-material';

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
```
### Description:
Description:
This component is responsible for rendering the visual representation of the star rating based on the average rating provided.

- Props: reviews is the average rating passed as a prop.
- Full Stars Calculation: fullStars is calculated by taking the integer part of the reviews value using Math.floor().
- Half Stars Calculation: halfStars is a boolean that checks if the fractional part of reviews is 0.5 or greater.
- Empty Stars Calculation: emptyStars is determined by subtracting the number of full and half stars from 5.
#### Rendering:
- Full Stars: A loop generates the appropriate number of full stars.
- Half Star: If halfStars is true, a half star is rendered.
- Empty Stars: A loop generates the appropriate number of empty stars.

Each star type is styled in gold to visually represent the rating. This component ensures the correct number of full, half, and empty stars are displayed based on the average rating.


### 6. How the average rating is not supposed to cross 5
- Since individual ratings cannot exceed 5, the average will never exceed 5.


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



