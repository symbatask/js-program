const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: [String],
    default: ['user']
  },
  score: {
    type: Number,
    default: 1,
    required: true
  },
  homeworks: {
    type: [Number],
    default: []
  },
  modules: {
    type: Object,
    default: {}
  }
})

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password)
})

userSchema.method({
  passwordMatches(password) {
    return bcrypt.compareSync(password, this.password)
  }
})

userSchema.statics = {
  async findAndValidateUser({ first_name, password }) {
    if (!first_name) {
      throw new Error('Enter user name')
    }
    if (!password) {
      throw new Error('Enter password')
    }
    const user = await this.findOne({ first_name })
    if (!user) {
      throw new Error('no user')
    }
    const isPasswordOk = await user.passwordMatches(password)
    if (!isPasswordOk) {
      throw new Error('incorrect password')
    }
    return user
  }
}

userSchema.methods.toAuthJSON = function () {
  return {
    first_name: this.first_name,
    homeworks: this.homeworks,
    role: this.role,
    score: this.score,
  }
}

userSchema.methods.toProfileJSON = function () {
  return {
    first_name: this.first_name,
    homeworks: this.homeworks,
    score: this.score,
  }
}

module.exports = mongoose.model('users', userSchema)
