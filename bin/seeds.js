// Iteration #1

const Drone = require("../models/Drone.model");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/express-drones-dev')

Drone.create(drones)
.then(drone => {
    console.log('drones created:', drone)
    mongoose.connection.close()
})
.catch(error => console.log('An error happened while creating a new drone', error))