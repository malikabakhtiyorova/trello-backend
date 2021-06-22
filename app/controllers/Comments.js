const Comments = require("../models/Comments")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Comments.comments(req))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    GETBYID: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Comments.commentById(req.params))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    POST: ('/', async (req, res) => {
        try {
             jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Comments.createComment(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    PUT: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Comments.updateComment(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    DELETE: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Comments.deleteComment(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}
