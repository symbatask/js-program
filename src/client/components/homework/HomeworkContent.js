import { useEffect, useState } from 'react'
import MarkdownToHtml from "../MarkdownToHtml";
import {useDispatch} from "react-redux";


const HomeworkContent = ({ homeworks, workId }) => {
  const dispatch = useDispatch()
  const [homework, setHomework] = useState({content: ''})

  useEffect(() => {
    if (homeworks.length > 0) {
      setHomework(homeworks.find((homework) => homework.work === +workId))
    }
  }, [dispatch, homeworks, workId])

  return (
      <MarkdownToHtml content={homework.content}/>
  )
}

export default HomeworkContent