const router = require('express').Router()
const {ClassType} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  ClassType.findAll({})
    .then(classTypes => res.json(classTypes))
    .catch(next);
  })

router.post('/', (req, res, next) => {
    ClassType.create(req.body)
      .then(classType => res.json(classType) )
      .catch(next)
  })

