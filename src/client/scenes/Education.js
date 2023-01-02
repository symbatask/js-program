import React, {useEffect, useMemo} from 'react'
import Head from "../components/Head";
import EducationList from "../components/education/EducationList";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import '../components/education/education.scss'
import EducationTasks from "../components/education/EducationTasks";
import LinksHistory from "../components/LinksHistory/LinksHistory";
import {getTasks, getWeeks} from "../redux/reducers/weeks";

const Education = () => {
  const weeks = useSelector((s) => s.weeks.weeks)
  const tasks = useSelector((s) => s.weeks.tasks)
  const {weekId} = useParams()
  const dispatch = useDispatch()


  // add scroll to element
  const refTasks = React.createRef();

  const handleClick = () => {
    if (refTasks.current !== null) {
      refTasks.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
  // END add scroll to element

  useEffect(() => {
    if (!weeks.length)
      dispatch(getWeeks())
  }, [dispatch, weeks.length])

  const isOpenWeek = useMemo(() => weeks.find(week => week.week === weekId)?.isUnlock, [weekId, weeks])

  useEffect(() => {
    isOpenWeek && dispatch(getTasks(weekId))
  }, [dispatch, isOpenWeek, weekId])

  return (
    <>
      <Head title="Education">
      </Head>
      {weekId && <LinksHistory weekId={weekId}/>}
      <section className="education">
        <EducationList weeks={weeks} weekId={weekId} handleClick={handleClick}/>
        {weekId && <EducationTasks weekId={weekId} tasks={tasks} refTasks={refTasks}/>}
      </section>
    </>
  );
}

export default Education