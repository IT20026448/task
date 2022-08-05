const express = require('express');

//create variable from models
const VehicleRegistration = require('../models/vehiclePosts');

const router = express.Router();

router.post('/vehicleregistration/save', (req, res) => {
    let newVehicle = new VehicleRegistration(req.body);

    newVehicle.save((err) => {
        if(err){
            return res.status(400).json({
                error : err
            });
            //if the post saved successfully the success massage will print
            return res.status(200).json({
                success: "registration successfull!"
            });
        }
    })
})