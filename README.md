# Real-Time Chat Application Documentation

## Overview
The application allows multiple users to join chat rooms and communicate with each other. The application will be built using Node.js, Express.js, and Socket.IO for real-time communication.

## How To Run The Project

### Clone the Repository

```bash
https://github.com/ManishaNath/Real-Time-Chat-Application/tree/dev

> Navigate to the Project Directory
--  Real-Time-Chat-Application

> Install the dependencies, Node modules get generated
--  npm install

> Run the project under dev dependencies
--  node index.js
```

# Architecture

## Backend
The backend is built using Node.js with Express.js as the web application framework. 
### index.js
This server script enables real-time communication between clients through Socket.IO, handling user connections, disconnections, and message exchanges within specific chat rooms. The server also serves static files for the client-side application

## Client 
### index.html
index.html, is the main entry point for a web application related to Women in Tech and Blockchain. 

### chat.html
 chat.html represents a web page for a blockchain chat application. 

### css -style.css
CSS stylesheet that defines the styling for a web application with two main pages: a chat page (chat.html) and a main page

### js - main.js
main.js, is designed for the client side of a real-time chat application. It uses Socket.IO to establish a bidirectional communication channel between the client and the server. 



## Testing

open browser and type in http://localhost:3000/ and hit enter!

# Deployment
The application can be deployed on cloud platforms like AWS, Heroku, or similar services. Continuous Integration (CI) and Continuous Deployment (CD) pipelines can be set up for automated testing and deployment.

# Conclusion
The Real-Time chat application, uses Express for handling HTTP requests and Socket.IO for real-time communication between clients and the server. 
## Folder Structure

├───public
│   ├───css
│   ├───js
│   ├───chat.html
│   ├───index.html
│   └───
│       

____index.js
____node_modules
____.gitignore
____package-lock.json
____package.json
____Screenshots
