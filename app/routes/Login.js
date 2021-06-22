const router = require('express').Router()
const Login = require('../controllers/Login.js')

router
  .route('/')
  .post(Login.POST)

module.exports = router