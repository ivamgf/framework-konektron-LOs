// Routes Module

const express = require('express');
const routes = express.Router();
const DocController = require("./controllers/DocController");

routes.get('/documentation', DocController.index);

module.exports = routes;