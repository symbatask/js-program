import cx from 'classnames'
import {history} from "../../redux";

const EducationList = ({weeks, weekId, handleClick}) => {

  return <div className="education-list__items">
    {weeks.map((week) => (
      <div
        key={week.week}
        className={cx("education-list__item", {'active': weekId === week.week}, {'close-card': !week.isUnlock})}
        onClick={() => {
          if (week.isUnlock) {
            history.push(`/education/${week.week}`)
          }
          if (window.outerWidth < 501) {
            handleClick()
          }
        }}
      >
        <div className="education-list__id">week {week.week}</div>
        <div className="education-list__name">{week.name}</div>
        <div className="education-list__date">{new Date(week.date).toDateString()}</div>
        {week.isUnlock || <div className="education-list__close"><i className="fas fa-lock"/> week closed</div>}
      </div>
    ))}
  </div>
}

export default EducationList