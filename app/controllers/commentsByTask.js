const commentsByTask = require("../models/commentsByTask")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await commentsByTask.commentsByTask(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}