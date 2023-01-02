import {useEffect, useState} from 'react'
import './linkHistory.scss'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

const Links = ({weekId, currentTask}) => {
  const dispatch = useDispatch()
  const weeks = useSelector((s) => s.weeks.weeks)
  const [currentWeek, setCurrentWeek] = useState(undefined)
  useEffect(() => {
    if(weeks.length > 0) {
      setCurrentWeek(weeks.find((week) => week.week === weekId))
    }
  }, [dispatch, weekId, weeks])



  if(currentWeek) return (
    <div className="link-history">
      <Link className="link-history__link" to={`/education/${weekId}`}>
        {currentWeek?.name}
      </Link>
      {currentTask && <span> / {currentTask && currentTask?.name} </span> }
    </div>
  )
  return null
}

export default Links