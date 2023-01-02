import axios from 'axios'
import { GET_USERS, COMPLETE_HOMEWORK } from '../actions/actions'

const initialState = {
  users: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users }
    case COMPLETE_HOMEWORK:
      return { ...state, users: action.users }
    default:
      return state
  }
}

export function getUsers() {
  return (dispatch) => {
    axios.get('/api/v1/users').then(({ data }) => dispatch({ type: GET_USERS, users: data.users }))
  }
}

export function completeHomework(first_name, work) {
  return (dispatch, getState) => {
    let { users } = getState().user
    users = users.reduce((acc, rec) => {
      if (rec.first_name === first_name) {
        return [...acc, { ...rec, homeworks: work }]
      }
      return [...acc, rec]
    }, [])
    axios.post('/api/v1/users/homeworks', { first_name, work })
    dispatch({ type: COMPLETE_HOMEWORK, users })
  }
}