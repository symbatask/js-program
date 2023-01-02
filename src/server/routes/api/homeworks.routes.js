const express = require('express')
const homeworksController = require('../../controllers/homeworks.controller')


const router = express.Router()

router.get('/', homeworksController.getAll)

router.post('/comments', homeworksController.getUserComments)

router.post('/comments/create', homeworksController.createNewComment)

router.patch('/comments/delete', homeworksController.deleteComment)

module.exports = router