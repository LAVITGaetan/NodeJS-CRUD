var Userdb = require('../model/model');

// create and save a user
exports.create = (req,res)=>{
    // validate request
    if(!req.body) {
        res.status(400).send({message:'Body cannot be empty'});
        return;
    }

//new user
const user = new Userdb({
    name : req.body.name,
    email : req.body.email,
    gender : req.body.gender,
    status: req.body.status
})

}

// retrieve multiple or single user
exports.find = (req,res) => {

}

// update selected user with specific id
exports.update = (req,res) => {

}

// delete selected user with id in request
exports.delete = (req,res) => {

}