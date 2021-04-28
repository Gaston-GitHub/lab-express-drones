const mongoose = require('mongoose');
const {Schema} = mongoose;

const droneSchema = new Schema(
    {
        name: {type: String},
        propellers: {type: Number},
        maxSpeeed: {type: Number}
    }
)

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;

