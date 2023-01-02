const express = require('express')
const signInController = require('../../controllers/signin.controller')


const router = express.Router()

router.get('/', signInController.trySignIn)
router.post('/', signInController.signIn)


module.exports = router