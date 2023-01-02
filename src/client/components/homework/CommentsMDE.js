import * as React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import "react-mde/lib/styles/css/react-mde-all.css";

import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createMessage} from "../../redux/reducers/homeworks";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
})

export default function CommentsMDE({workId, userName}) {
  const [value, setValue] = useState('')
  const [alert, setAlert] = useState('')
  const [selectedTab, setSelectedTab] = React.useState('write')
  const dispatch = useDispatch()

  const postComment = () => {
    if (value.length < 10) {
      setAlert('Type at least 10 symbols')
      setTimeout(() => {
          setAlert('')
        },5000)
    } else {
      dispatch(createMessage(workId, {user: userName, message: value}))
      setValue('')
    }
  }

  return (
    <div className="homework-comments__mde">
      <span className="homework-comments__mde-alert">{alert}</span>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
      />
      <button
        type="button"
        className="homework-comments__mde-post"
        onClick={postComment}
      >
        Send
      </button>
    </div>
  )
}