const router = require('express').Router()
const Users = require('../controllers/Users.js')

router
  .route('/')
  .get(Users.GET)
  .post(Users.POST)
  .put(Users.PUT)
  .delete(Users.DELETE)

router.route('/:id').get(Users.GETBYID)


module.exports = router