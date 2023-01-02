const Homeworks = require('../models/Homework.model')


exports.getAll = async (req, res) => {
  let homeworks = await Homeworks.find({}).sort({ date: -1 })
  homeworks.map((homework) => homework.comments = undefined)
  res.json(homeworks)
}

exports.getUserComments = async (req, res) => {
  const {work} = req.body
  const {user} = req.body
  const comments = await Homeworks.find({work})
  const userComments = comments[0].comments.filter((comment) => comment.user === user)
  res.json(userComments)
}

exports.createNewComment = async (req, res) => {
  const { work } = req.body
  const { comments } = req.body
  await Homeworks.updateOne({ work }, { $set: { comments } })
  res.json('success')
}

exports.deleteComment = async (req, res) => {
  const { work } = req.body
  const { comments } = req.body
  await Homeworks.updateOne({ work }, { $set: { comments } })
  res.json('success')
}