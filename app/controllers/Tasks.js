const Tasks = require("../models/Tasks")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            res.send(await Tasks.tasks ())
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    GETBYID: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Tasks.taskById(req.params))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    POST: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Tasks.createTask(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    PUT: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Tasks.updateTask(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    DELETE: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Tasks.deleteTask(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}