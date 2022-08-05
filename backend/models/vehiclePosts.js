const mongoose = require('mongoose');

const postvehicleSchema = new mongoose.Schema({
    //set the attributes of the vehicle
    PlateNumber:{
        type : String,
        required : true
    },

    Type:{
        type : String,
        required : true
    }
});

// export the schema
module.exports = mongoose.model('VehicleRegistration', postvehicleSchema);