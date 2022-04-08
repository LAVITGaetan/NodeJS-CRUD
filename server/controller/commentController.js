var Commentdb = require('../model/commentModel');

// create and save a comment
exports.create = (req,res)=>{
    // validate request
    if(!req.body) {
        res.status(400).send({message:'Body cannot be empty'});
        return;
    }

// retrieve new comment data
const comment = new Commentdb({
    label : req.body.label,
    text : req.body.text,
    status: req.body.status
})

// save comment in database
comment
  .save(comment)
  .then(data => {
     // res.send(data)
     res.redirect('/comments')
  })
  .catch(err => {
      res.status(500).send({message : err.message || "Some error occured while creating the comment"});
  });

}

// retrieve multiple comments or single comment
exports.find = (req,res) => {

    if(req.query.id) {
        const id = req.query.id;
        Commentdb.findById(id)
        .then(data =>{   
            if(!data) {
                res.status(404).send({message: "Did not found comment with id:"+id})
            }else {
                res.send(data);
            }        
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Some error occured while searching for comment'});
        });
    }else {
        Commentdb.find()
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Some error occured while searching for comment'});
        });
    }
}

// retrieve single comment
exports.show = (req,res) => {
    Commentdb.findById(id)
      .then(comment => {
          res.send(comment)
      })
      .catch(err => {
          res.status(500).send({message: err.message || 'Some error occured while searching for comment'});
      });
}

// update selected comment with specific id
exports.update = (req,res) => {
    // validate request
    if(!req.body) {
        return res
          .status(400)
          .send({message:'Data to update cannot be empty'});
    }
    const id = req.params.id;

    Commentdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
      .then(data => {
          if(!data) {
              res.status(404).send({message : `Cannot update comment with ${id}, not found`});
          }else {
              res.send(data);
          }
      })
      .catch(err => {
        res.status(500).send({message: err.message || 'Some error occured while searching for comment'});
    });
}

// delete selected comment with id in request
exports.delete = (req,res) => {

const id = req.params.id;

Commentdb.findByIdAndDelete(id)
  .then(data => {
      if(!data) {
          res.status(404).send({message : `Cannot delete comment with ${id}, not found`});
      }else {
          res.send('Comment was deleted!');
      }
  })
  .catch(err => {
    res.status(500).send({message: err.message || 'Could not delete comment with id:' + id});
});

}