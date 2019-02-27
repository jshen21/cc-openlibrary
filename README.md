# Open Library Books API Code Challenge

## Overview

The app runs on a Node/Express server and is powered by React and Redux on the front end. It allows the user to made AJAX requests to the Open Library Books API based on search input, and get the data to generate the React components. It is deployed at https://cc-openlibrary.herokuapp.com/.

## Funtionalities/Features

1. Allow the user to search for a book by "All", "Title" or "Author".
2. Allow the user to sort and filter search results, any changes to the "Sort by" and "Filter by" can re-paint the results without needing to refresh the page.
3. Proper error handling: validations and data cleanup have been done in order to succesfully render components.
4. DRY code: 
    1. Utility functions for data manipulation, data fetching. 
    2. Use modularized structure: create "Books" component to render books, sorted books and filtered books conditionally; create "Loading" screen when fetching "Books" and "SingleBook".
5. Readability: write documentation and comments to increase code readability and maintainability.


## To run this locally:
1. npm install 
2. npm run start-dev

## To run tests:
1. npm test
