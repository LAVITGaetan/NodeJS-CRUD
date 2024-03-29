const axios = require('axios');
const { query } = require('express');


exports.homeRoutes = (req, res) => {
    // Make a GET request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params : {id:req.query.id}})
        .then(function (userdata) {
            res.render('update_user', {user : userdata.data});
        })
        .catch(err => {
            res.send(err);
        })
}


exports.comments = (req, res) => {

    axios.get('http://localhost:3000/api/comments')
    .then(function(commentdata) {
        res.render('index_comment', {comments : commentdata.data});

    })
}

exports.add_comment = (req, res) => {
    res.render('add_comment');

}

exports.update_comment = (req, res) => {
    axios.get('http://localhost:3000/api/comments', {params : {id:req.query.id}})
        .then(function (commentdata) {
            res.render('update_comment', {comment : commentdata.data});
        })
        .catch(err => {
            res.send(err);
        })
}