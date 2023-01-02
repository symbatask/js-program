const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const config = require('../config')


exports.signIn = async (req, res) => {
  try {
    const user = await User.findAndValidateUser(req.body)
    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secretKey)
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 })
    res.json({ user: user.toAuthJSON(), token })
  } catch (err) {
    console.log(err)
    res.status(401).json({ status: 'error' })
  }
}



exports.trySignIn = async (req, res) => {
  try {
    const { token } = req.cookies
    const userID = jwt.verify(token, config.secretKey).uid
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 })
    const user = await User.findById(userID, {password: 0})
    res.json({ user, token })
  } catch (err) {
    res.json({status: "error"})
  }
}