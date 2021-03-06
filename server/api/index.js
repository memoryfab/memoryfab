const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/cars', require('./cars'))
router.use('/parts', require('./parts'))
router.use('/admin', require('./admin'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
