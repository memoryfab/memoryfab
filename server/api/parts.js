const router = require('express').Router()
const {Base, ClassType} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Base.findAll({
    include: [{
        model: ClassType,
        where: {
            className: 'Parts'
        }
    }]
    })
    .then(parts => res.json(parts))
    .catch(next);
  })

