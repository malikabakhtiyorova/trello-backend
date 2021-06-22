const Users = require("../models/Users")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Users.users(req))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    GETBYID: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Users.userById(req.params))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    POST: ('/', async (req, res) => {
        try {
            res.send(await Users.createUser(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    PUT: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Users.updateUser(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    DELETE: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Users.deleteUser(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}