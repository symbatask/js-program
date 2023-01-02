const express = require('express')
const weeksController = require('../../controllers/weeks.controller')


const router = express.Router()

router.get('/', weeksController.getWeeks)

router.get('/:weekId', weeksController.getTasks)

module.exports = router