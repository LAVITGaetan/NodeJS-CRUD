const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const commentController = require('../controller/commentController');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user',services.add_user);

/**
 * @description update user
 * @method GET /update-user
 */
route.get('/update-user',services.update_user);

// API user
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

/**
 * @description comment Route
 * @method GET /
 */
 route.get('/comments',services.comments);

 /**
 * @description add comment
 * @method GET /add-comment
 */
route.get('/add-comment',services.add_comment);

// API comment
route.post('/api/comments', commentController.create);
route.get('/api/comments', commentController.find);
route.put('/api/comments/:id', commentController.update);
route.delete('/api/comments/:id', commentController.delete);

module.exports = route