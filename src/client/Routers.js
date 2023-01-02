import React, {Suspense, lazy} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

const Dashboard = lazy(() => import("./scenes/Dashboard"));
const Education = lazy(() => import("./scenes/Education"));
const Error = lazy(() => import("./scenes/404"));
const Homework = lazy(() => import("./scenes/Homework"));
const Lesson = lazy(() => import("./scenes/Lesson/Lesson"));


const Routers = () => {

  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Dashboard/>
        </Suspense>
      </Route>
      <Route path="/education" exact>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Education/>
        </Suspense>
      </Route>
      <Route path="/education/:weekId" exact>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Education/>
        </Suspense>
      </Route>
      <Route path="/education/:weekId/:taskId" exact>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Lesson/>
        </Suspense>
      </Route>
      <Route path="/homework/list" exact>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Homework/>
        </Suspense>
      </Route>
      <Route path="/homework/list/:workId" exact>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Homework/>
        </Suspense>
      </Route>
      <Redirect to="/"/>
      <Route component={() => <Error/>}/>
    </Switch>
  )
}

export default Routers
