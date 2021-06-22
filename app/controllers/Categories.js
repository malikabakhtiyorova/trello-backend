const Categories = require("../models/Categories")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("./Login")

module.exports = {
    GET: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Categories.categories())
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    GETBYID: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Categories.categoryById(req.params))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    POST: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Categories.createCategory(req))
        }
        catch(error){
            res.status(400).json({error: error.message})
        }
    }),
    PUT: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Categories.updateCategory(req))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }),
    DELETE: ('/', async (req, res) => {
        try {
            jwt.verify(req.headers.token, SECRET_KEY)
            res.send(await Categories.deleteCategory(req.body))
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })
}