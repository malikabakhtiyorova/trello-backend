const router = require('express').Router()
const Tasks = require('../controllers/Tasks.js')

router
  .route('/')
  .get(Tasks.GET)
  .post(Tasks.POST)
  .put(Tasks.PUT)
  .delete(Tasks.DELETE)

router.route('/:id').get(Tasks.GETBYID)

module.exports = router