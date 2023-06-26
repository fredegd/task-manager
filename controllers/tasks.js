const pool = require("../db");

const { validationResult } = require('express-validator');

const getTasks = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM tasks ORDER BY title;");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};



const createTask = async (req, res) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const { title, description ,priority="low"} = req.body;
        const { rows } = await pool.query(
          "INSERT INTO tasks (title, description, priority) VALUES ($1, $2,$3) RETURNING *;",
          [title, description,priority]
        );
       return res.status(200).json(rows[0]);
    }else{
      return  res.status(400).send({ errors: result.array() });
    }


  
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong: "+error.detail);
  }
};

module.exports = {
  getTasks,
  createTask,
};
