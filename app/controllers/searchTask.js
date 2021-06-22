const searchTask = require("../models/searchTask")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await searchTask.search(req))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })

}
