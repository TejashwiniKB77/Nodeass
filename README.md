Static Image Serving API
This project extends an existing Node.js and Express backend by adding a Static Image Serving API.
The API allows users to fetch image files stored on the server using HTTP requests.
It includes proper error handling and secure file access.

Objectives
Extend an existing Node.js + Express project
Serve image files using an API
Handle missing and invalid image requests

Test the API using Browser and Postman
Project Structure
backend/
├── server.js
├── routes/
│   └── imageRoutes.js
├── images/
│   ├── img1.jpg
│   ├── img2.png
│   ├── img3.jpeg
│   ├── img4.jpg
│   ├── img5.png
│   ├── img6.jpeg
│   ├── img7.jpg
│   ├── img8.png
│   ├── img9.jpeg
│   └── img10.jpg

Image Storage
Images are stored in the /images folder
Minimum of 10 images included
Supported formats: JPG, JPEG, PNG

API Endpoint
GET /images/:imageName

Description:
Returns the requested image from the server.
Success Response:
Status Code: 200

Image file is returned
Error Response:

404 – Image not found
400 – Invalid file name

Sample Requests

Browser:

http://localhost:5000/images/ad1.jpeg


Postman:

GET http://localhost:5000/images/ad1.jpeg

Execution Steps

Open the backend folder

Run npm install

Start the server using node server.js

Test the API in browser or Postman

Conclusion

The Static Image Serving API is implemented successfully.
It meets all assignment requirements and works as expected.
