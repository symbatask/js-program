import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getTasks, getWeeks} from "../../redux/reducers/weeks";
import {history} from '../../redux'
import '../../../assets/css/markdown.scss'
import './lesson.scss'
import Head from "../../components/Head";
import MarkdownToHtml from "../../components/MarkdownToHtml";
import LinksHistory from "../../components/LinksHistory/LinksHistory";

const Lesson = () => {
  const tasks = useSelector((s) => s.weeks.tasks)
  const weeks = useSelector((s) => s.weeks.weeks)
  const [currentTask, setCurrentTask] = useState({})
  const [prevTask, setPrevTask] = useState('')
  const [nextTask, setNextTask] = useState('')
  const [content, setContent] = useState('### Almost ready...')
  const {weekId, taskId} = useParams()
  const dispatch = useDispatch()


  // add scroll to element

  const lessonRef = React.createRef();

  const handleClick = () =>
    lessonRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  // END add scroll to element


  useEffect(() => {
    if (tasks.length <= 0) {
      dispatch(getTasks(weekId, taskId))
    } else {
      setCurrentTask(tasks.find((el) => el.date === +taskId))
      setPrevTask(tasks[tasks.findIndex((el) => el.date === +taskId) - 1])
      setNextTask(tasks[tasks.findIndex((el) => el.date === +taskId) + 1])
      setContent(tasks.find((el) => el.date === +taskId).content)
    }
  }, [dispatch, taskId, tasks, weekId])

  useEffect(() => {
    if (weeks.length <= 0)
      dispatch(getWeeks())
  }, [dispatch, weeks.length])

  return (
    <>
      <Head title="Lesson">
      </Head>
      {weekId && <LinksHistory weekId={weekId} currentTask={currentTask}/>}
      <section className="lesson" ref={lessonRef}>
        <h2 className="lesson__title">{currentTask.name}</h2>
        <MarkdownToHtml content={content}/>
        <div className="mb-5">
          <div className="inline-flex">
            {prevTask &&
            <button
              onClick={() => {
                history.push(`/education/${weekId}/${prevTask.date}`)
                handleClick()
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-l">
              Prev
            </button>
            }
            {nextTask &&
            <button
              onClick={() => {history.push(`/education/${weekId}/${nextTask.date}`)
                handleClick()
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r">
              Next
            </button>
            }
          </div>
        </div>
      </section>
    </>
  )

}
export default Lesson