# Book Management API

The Book Management API is a Node.js application built using Express.js and MongoDB Atlas for managing a book inventory. It provides features for user authentication, book CRUD operations, and filtering/searching books based on authors and publication years.

## Deployed link
- Click here ['https://bookstore-unar.onrender.com/']

## Technologies Used
- **Node.js**: A JavaScript runtime used for building the backend server.
  
- **Express.js**: A web application framework for Node.js used for creating RESTful APIs.
  
- **MongoDB Atlas**: A cloud-hosted MongoDB database service used for storing book data.

## Dependencies

- **bcryptjs**: Library for hashing passwords securely.
  
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
  
- **dotenv**: Library for loading environment variables from a `.env` file.
  
- **express-rate-limit**: Middleware for rate-limiting requests in Express.js.
  
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT) for user authentication.
  
- **mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
  
- **nodemon**: A tool for automatically restarting the Node.js server when file changes are detected during development.

## Features

- **User Authentication**: Users can register and login with hashed passwords. JWT-based authentication is used to verify user sessions.

- **Book Management**: Users can add, update, delete, and view their own books. Books are stored in the database with fields like title, author, and publication year.

- **Relational Data Technique**: Books are associated with users through a relational-based technique, ensuring that users can only access their own books.

- **Search/Filter Books**: Users can search and filter books based on authors and publication years.

- **Rate Limiter**: A rate limiter middleware is implemented to restrict users to 100 requests per IP address within a specified time window.

## Setup Instructions

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Install dependencies using npm:


4. Create a `.env` file in the root directory of the project and add the following environment variables:


5. Start the server:


6. The API will be accessible at `http://localhost:3000`.

## API Endpoints

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login with username and password to obtain JWT token.
- **GET /books**: Get all books (filtered by user if authenticated).
- **GET /books/get/:id**: Get a single book by ID.
- **GET /books/get/:id**: Get All books.
- **POST /books/add**: Add a new book.
- **PUT /books/update/:id**: Update an existing book by ID.
- **DELETE /books/delete/:id**: Delete a book by ID.

### Filtering/Search Endpoints

- **GET /books/filter?author=author_name**: Filter books by author name.
- **GET /books/filter?years=years**: Filter books by publication year.

## Deployment

The Book Management API can be deployed to any cloud platform that supports Node.js applications, such as Heroku, AWS, or Google Cloud Platform. Ensure that you configure the environment variables in your deployment environment similar to the `.env` file used for local development.

