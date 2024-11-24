# Recipe Finder App

## Overview

The Recipe Finder App is a web-based application that allows users to search for recipes by ingredients or dish names. The app provides detailed information about each recipe, including ingredients, instructions, and images. Users can also save their favorite recipes for future reference. The app is built with React and integrates with a recipe API to provide users with a smooth, dynamic search experience.

## Features

### 1. Recipe Search
**Description:**  
The homepage features a search bar where users can type in keywords such as ingredients or dish names to search for recipes.

**Implementation:**  
- Integrated the Spoonacular API to fetch recipes based on user input.
- The app dynamically retrieves a list of recipes as the user types, providing an instant search experience.

**Notes:**  
This feature is designed to improve user experience by offering real-time results as users type their search queries.

---

### 2. Recipe Details Page
**Description:**  
Each recipe has a dedicated details page where users can view comprehensive information, including the title, ingredients, cooking instructions, and an image of the dish.

**Implementation:**  
- Displayed recipe details in a clear, user-friendly layout using React components.
- The recipe information is fetched from the Spoonacular API and displayed in an organized manner.

---

### 3. Favorite Recipes
**Description:**  
Users can save their favorite recipes for future reference from the recipe details page.

**Implementation:**  
- Added a "Save to Favorites" button on the recipe details page.
- Stored the favorite recipes in the browser's local storage to ensure persistence between sessions.

---

### 4. Error Handling
**Description:**  
The app gracefully handles API errors or cases where no results are found for a search query.

**Implementation:**  
- Included error messages when the API fails to fetch data.
- Displayed a user-friendly message when no recipes match the search criteria, ensuring a smooth experience even when no results are available.

---

### 5. Styling and User Interface (UI/UX)
**Description:**  
The app is designed with a focus on creating an attractive and user-friendly interface suitable for both desktop and mobile users.

**Implementation:**  
- Used Tailwind CSS to build a responsive layout that adjusts seamlessly to different screen sizes.
- Prioritized a clean and intuitive UI with clear navigation and easily readable text to enhance user experience.

---

## Images of Components

### 1. Homepage - Recipe Search  
![Recipe Search Homepage](/home.png)

### 2. Recipe Details Page  
![Recipe Details](/details.png)

### 3. Saved Favorite Recipes  
![Favorite Recipes](/favorite.png)

---

## Technologies Used
- **React:** For building the user interface.
- **Tailwind CSS:** For responsive and attractive styling.
- **Spoonacular API:** To fetch recipe data based on user input.
- **Local Storage:** For storing favorite recipes.

---

## Learnings from the Project
- **API Integration:** I learned how to integrate external APIs (like Spoonacular) with a React app and manage data fetching asynchronously.
- **State Management:** Improved my understanding of managing component state in React, particularly for storing user preferences like favorite recipes.
- **UI/UX Design:** Gained hands-on experience in creating responsive, visually appealing UIs with Tailwind CSS.
- **Error Handling:** Developed a better understanding of error handling in web applications, ensuring a smooth user experience despite API failures.

---

## Future Improvements
1. **User Authentication:** Implement user authentication to allow users to save their favorite recipes across sessions on different devices.
2. **Recipe Sharing:** Add functionality for users to share their favorite recipes with others through social media or a generated link.
3. **Search Filters:** Enhance the search functionality by adding filters (e.g., dietary preferences, meal type, etc.) to refine results further.
4. **Recipe Ratings:** Allow users to rate recipes and display user ratings for each recipe.

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Sainkee/recipe-finder.git
2. Install dependencies:
   ```bash
    npm i
1. Run the development server::
   ```bash
    npm run dev
