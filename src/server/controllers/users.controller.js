const Users = require('../models/User.model')

exports.getAll = async (req, res) => {
  try {
    const users = await Users.find({role: 'user'}, {password: 0, role: 0}).sort({score: -1})
    if (!users) return res.status(404).json({error: 'an unknown error occurred'})
    res.json({users})
  } catch (e) {
    res.status(404).json(e)
  }
}

exports.updateHomeworkList = async (req, res) => {
  const { first_name } = req.body
  const { work } = req.body
  await Users.updateOne({ first_name }, { $set: { homeworks: work } })
  res.sendStatus(200).send('success')
}


