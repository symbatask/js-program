import cx from "classnames";
import {history} from "../../redux";


const HomeworkList = ({homeworks, workId, user} ) => {

  return (
    <div className="homework-list__items">
      {homeworks.map((homework) => (
        <div
          key={homework.work}
          className={cx("homework-list__item", {'active': +workId === homework.work})}
          onClick={() => {
            if (homework.isUnlock) {
              history.push(`/homework/list/${homework.work}`)
            }
          }}
        >
          <div className="homework-list__id">Homework {homework.work}
            { user.homeworks.includes(homework.work) && <span className="homework-list__check">&#10004;</span>}
          </div>
          <div className="homework-list__name">{homework.name}</div>
          <div className="homework-list__date">{new Date(homework.date).toDateString()}</div>
          {homework.isUnlock || <div className="homework-list__close"><i className="fas fa-lock"/> Homework closed</div>}
        </div>
      ))}
    </div>
  )
}

export default HomeworkList