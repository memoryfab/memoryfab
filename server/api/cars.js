const router = require('express').Router()
const {Base, ClassType} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Base.findAll({
    include: [{
        model: ClassType,
        where: {
            className: 'Car'
        }
    }]
    })
    .then(cars => res.json(cars))
    .catch(next);
  })

router.get('/:id', (req ,res ,next) => {
    Base.findById(req.params.id, {
        include: [{
            model: ClassType,
            where: {
                className: 'Car',
            }
        }]
        })
        .then(cars => res.json(cars))
        .catch(next);
})


router.post('/', (req, res, next) => {
    Base.create(req.body)
      .then(car => res.json(car) )
      .catch(next)
  })

