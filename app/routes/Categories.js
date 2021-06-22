const router = require('express').Router()
const Categories = require('../controllers/Categories.js')

router
  .route('/')
  .get(Categories.GET)
  .post(Categories.POST)
  .put(Categories.PUT)
  .delete(Categories.DELETE)

router.route('/:id').get(Categories.GETBYID)

module.exports = router
