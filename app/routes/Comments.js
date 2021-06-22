const router = require('express').Router()
const Comments = require('../controllers/Comments.js')

router
  .route('/')
  .get(Comments.GET)
  .post(Comments.POST)
  .put(Comments.PUT)
  .delete(Comments.DELETE)

router.route('/:id').get(Comments.GETBYID)

module.exports = router