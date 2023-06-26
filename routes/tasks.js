const express = require("express");
const { body, validationResult } = require('express-validator') ;

const {getTasks,createTask} = require("../controllers/tasks")
 
const tasksRouter = express.Router();

tasksRouter.get("/", getTasks);

tasksRouter.post("/",body('title', 'description').notEmpty(), createTask);


module.exports = tasksRouter;