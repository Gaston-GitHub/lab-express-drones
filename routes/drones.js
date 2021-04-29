const express = require('express');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
  .then(drones => {
    res.render('drones/list', {drones})
  })
  .catch(error => console.log(error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
  .then(() => {
    res.redirect('/drones')
  })
  .catch(error => res.render('drones/create-form', {error}))
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  Drone.findById(id)
  .then(drone => res.render('drones/update-form', drone))  
  .catch(error => console.log(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(() => { res.redirect('/drones')})
  .catch(error => res.render('drones/update-form', {error}))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
const {id} = req.params;
Drone.findByIdAndDelete(id)
.then(() => {
  res.redirect('/drones')
})
.catch(error => console.log(error))
});

module.exports = router;
