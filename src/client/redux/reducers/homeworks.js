import axios from 'axios'
import { GET_HOMEWORKS, GET_COMMENTS, CREATE_NEW_COMMENT, DELETE_COMMENT } from '../actions/actions'

const initialState = {
  homeworks: [],
  comments: []
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEWORKS:
      return { ...state, homeworks: action.homeworks }
    case GET_COMMENTS:
      return { ...state, comments: action.comments || [] }
    case DELETE_COMMENT:
      return { ...state, comments: action.comments }
    case CREATE_NEW_COMMENT:
      return { ...state, comments: [...state.comments, action.message] }
    default:
      return state
  }
}

export function getHomeworks() {
  return (dispatch) => {
    axios
      .get('/api/v1/homeworks')
      .then(({ data: homeworks }) => dispatch({ type: GET_HOMEWORKS, homeworks }))
  }
}

export function getComments(work, user) {
  return (dispatch) => {
    axios
      .post('/api/v1/homeworks/comments', { work, user })
      .then(({ data: comments }) => dispatch({ type: GET_COMMENTS, comments }))
  }
}

export function createMessage(work, newMessage) {
  const message = {
    ...newMessage,
    date: +new Date()
  }
  return (dispatch, getState) => {
    let { comments } = getState().homeworks
    comments = [...comments, message]
    axios.post('/api/v1/homeworks/comments/create', {
      work,
      comments
    }).then(() => dispatch({ type: CREATE_NEW_COMMENT, message }))

  }
}

export function deleteComment(work, date) {
  return (dispatch, getState) => {
    let { comments } = getState().homeworks
    comments = comments.filter((el) => el.date !== date)
    axios.patch('/api/v1/homeworks/comments/delete', {
      work,
      comments
    }).then(({data}) => data === 'success' ? dispatch({ type: DELETE_COMMENT, comments }) : '')
  }
}
