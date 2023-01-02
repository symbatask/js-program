const express = require('express')
const usersController = require('../../controllers/users.controller')


const router = express.Router()

router.get('/', usersController.getAll)

router.patch('/homeworks', usersController.updateHomeworkList)

module.exports = router