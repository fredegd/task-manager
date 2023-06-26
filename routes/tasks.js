const express = require("express");
const { body, validationResult } = require('express-validator') ;

const {getTasks,createTask} = require("../controllers/tasks")
 
const tasksRouter = express.Router();

tasksRouter.get("/", getTasks);

tasksRouter.post("/",body('title').trim().notEmpty(),body('description').trim().notEmpty().isLength({ min: 20, max:200 }), createTask);


module.exports = tasksRouter;