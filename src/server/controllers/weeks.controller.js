const mcache = require('memory-cache')
const Weeks = require('../models/Weeks.model');
const Tasks = require('../models/Tasks.model')

exports.getWeeks = async (req, res, next) => {
  const key = 'weeks'
  try {
    let weeks = mcache.get(key)
    if(!weeks) {
      weeks = await Weeks.find().sort({date: -1})
      mcache.put(key, weeks, 300000)
    }

    res.json(weeks)
  } catch {
    res.sendStatus(404)
    res.end()
  }
  next()
}

exports.getTasks = async (req, res, next) => {
  const { weekId } = req.params
  const key = 'tasks'

  try {
    let tasks = mcache.get(key + weekId)
    if(!tasks) {
      tasks = await Tasks.find({ week: weekId, isUnlock: true })
      mcache.put(key, tasks, 300000)
    }
    res.json(tasks)
  } catch {
    res.sendStatus(404)
    res.end()
  }
  next()
}

exports.getTask = async (req, res) => {
  const { weekId, taskId } = req.params
  const task = await Tasks.find({ week: weekId, isUnlock: true, date : taskId })
  res.json(task[0])
}
