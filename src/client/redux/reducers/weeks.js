import axios from 'axios'
import { GET_WEEKS, GET_TASKS } from '../actions/actions'

const initialState = {
  weeks: [],
  tasks: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEEKS:
      return { ...state, weeks: action.weeks }
    case GET_TASKS:
      return { ...state, tasks: action.tasks }
    default:
      return state
  }
}

export function getWeeks() {
  return (dispatch) => {
    axios.get('/api/v1/weeks').then(({ data: weeks }) => dispatch({ type: GET_WEEKS, weeks }))
  }
}

export function getTasks(weekId) {
  return (dispatch) => {
    axios
      .get(`/api/v1/weeks/${weekId}`)
      .then(({ data: tasks }) => dispatch({ type: GET_TASKS, tasks }))
  }
}
