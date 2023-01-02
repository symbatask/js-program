import React, {useEffect} from 'react'
import Head from "../components/Head";
import {useDispatch, useSelector} from "react-redux";
import {getHomeworks} from "../redux/reducers/homeworks";
import HomeworkList from "../components/homework/HomeworkList";
import {Route, useParams} from 'react-router-dom';
import '../components/homework/homework.scss';
import HomeworkContent from "../components/homework/HomeworkContent";
import HwComments from "../components/homework/HomeworkComments";

const Homework = () => {
  const homeworks = useSelector((s) => s.homeworks.homeworks)
  const user = useSelector((s) => s.signIn.user)
  const dispatch = useDispatch()
  const { workId } = useParams()
  useEffect(() => {
    if (!homeworks.length) {
      dispatch(getHomeworks())
    }
  }, [dispatch, homeworks.length])
  return (
    <>
      <Head title="Homework">
      </Head>
      <section className="homework">
        <HomeworkList homeworks={homeworks} workId={workId} user={user}/>
        <div className="homework-content">
          <Route path="/homework/list/:workId" exact component={() => <HomeworkContent homeworks={homeworks} workId={workId}/>}/>
          <Route path="/homework/list/:workId" exact component={() => <HwComments userName={user.first_name}/>}/>
        </div>
      </section>
    </>
  )
}

export default Homework