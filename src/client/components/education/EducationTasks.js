import cx from 'classnames'
import {history} from "../../redux";
import useSticky from "../../hooks/useSticky";

const EducationTasks = ({weekId, tasks, refTasks}) => {

  useSticky(tasks, '.education-tasks__content',  'education__sticky', 100,)

  return <div className="education-tasks__items" ref={refTasks}>
    <div className="education-tasks__content">
      {tasks.map((task) => (
          <button
            key={task.date}
            className={cx("education-tasks__item", {'active': weekId === task.week})}
            onClick={() => history.push(`/education/${task.week}/${task.date}`)}
          >
            <span className="education-tasks__name">{task.name}</span>
            <span className="education-tasks__description">{task.description}</span>
          </button>
        )
      )}
    </div>
  </div>
}

export default EducationTasks