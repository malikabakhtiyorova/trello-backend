const UsersTask = require("../models/UsersTask")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await UsersTask.usersByTaskId(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}