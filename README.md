bookStore :books:
Description
bookStore is a single-page web application designed to make it easier for users to find free books online in PDF or audiobook format. Utilizing the Google Books API, the app allows users to search for books based on different criteria and view detailed information about each book.

Table of Contents
Features
Technologies Used
Setup and Installation
Usage
Contributing
License
Features
Header
The header contains the name of the app and any relevant branding to help users quickly identify the application.

Search Form
Search By: Dropdown menu that allows users to choose whether to search by author, title, or genre.
Search Query: Text input for the user's search query.
Dynamic Results Table
Populates dynamically based on the data fetched from the Google Books API.
Displays basic information such as:
Book cover
Title
Summary (limited to 100 characters with a "Read More" option)
Authors
Published Date
Book Summary
Implemented using modals that populate upon clicking the "Read More" link next to each book summary in the Dynamic Results Table.
Shows the full summary of the selected book.
Links to FREE Audiobook & PDF
Provides direct links to free audiobooks and PDF versions of the book.
Includes fan-made YouTube versions for a wider variety of choices.
Technologies Used
HTML5
CSS3 (SCSS)
JavaScript (jQuery)
Google Books API
Setup and Installation
Clone the repository
Run npm install to install dependencies
Open index.html in your browser
Usage
Simply select your search criteria, input your query, and hit the "Search" button. The table below will populate with the relevant results.

Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.