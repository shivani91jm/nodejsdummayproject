const express = require('express');
const routes = express.Router();
const userController = require("../controllers/userController");
routes.get("/",userController.getUsers);
routes.get("/get_single_user",userController.getSingleUser);
module.exports = routes;