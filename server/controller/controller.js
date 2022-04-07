var Userdb = require('../model/model');

// create and save a user
exports.create = (req,res)=>{
    // validate request
    if(!req.body) {
        res.status(400).send({message:'Body cannot be empty'});
        return;
    }

// retrieve new user data
const user = new Userdb({
    name : req.body.name,
    email : req.body.email,
    gender : req.body.gender,
    status: req.body.status
})

// save user in database
user
  .save(user)
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({message : err.message || "Some error occured while creating the user"});
  });

}

// retrieve multiple users or single user
exports.find = (req,res) => {

    if(req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
        .then(data =>{   
            if(!data) {
                res.status(404).send({message: "Did not found user with id:"+id})
            }else {
                res.send(data);
            }        
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Some error occured while searching for user'});
        });
    }else {
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Some error occured while searching for user'});
        });
    }
}

// retrieve single user
exports.show = (req,res) => {
    Userdb.findById(id)
      .then(user => {
          res.send(user)
      })
      .catch(err => {
          res.status(500).send({message: err.message || 'Some error occured while searching for user'});
      });
}

// update selected user with specific id
exports.update = (req,res) => {
    // validate request
    if(!req.body) {
        return res
          .status(400)
          .send({message:'Data to update cannot be empty'});
    }
    const id = req.params.id;

    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
      .then(data => {
          if(!data) {
              res.status(404).send({message : `Cannot update user with ${id}, not found`});
          }else {
              res.send(data);
          }
      })
      .catch(err => {
        res.status(500).send({message: err.message || 'Some error occured while searching for user'});
    });
}

// delete selected user with id in request
exports.delete = (req,res) => {

const id = req.params.id;

Userdb.findByIdAndDelete(id)
  .then(data => {
      if(!data) {
          res.status(404).send({message : `Cannot delete user with ${id}, not found`});
      }else {
          res.send('User was deleted!');
      }
  })
  .catch(err => {
    res.status(500).send({message: err.message || 'Could not delete user with id:' + id});
});

}