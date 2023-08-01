//Step 1: Declare that we need express
const express = require("express");

//Step 2: Declare a new constant that is executing the las variable as a function
const app = express();

//Step 3: Makes the secondary folders accesible
app.use(express.static("public"));

//Step 4: Set every route for every page
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work-page.html'));
app.get('/photo-gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery-page.html'));

//Step 5: Select a port to work and set a console.log to look if the server is running
app.listen(3000, ()=>{console.log("Express server running");})

//Step 6: Initialize the server (node ./"file-name")