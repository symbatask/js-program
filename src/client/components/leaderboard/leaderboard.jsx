import {useSelector} from "react-redux";
import cx from "classnames";
import styles from './leaderboard.module.scss'


const Leaderboard = ({setIsOpenBoard, isOpenBoard, userName}) => {
  const users = useSelector((s) => s.users.users)

  return (
    <>
      <div onClick={() => setIsOpenBoard(false)}
           className={cx(styles.leaderboard__backdrop, {[styles.open]: isOpenBoard})}/>
      <div className={cx(styles.leaderboard, {[styles.open]: isOpenBoard})}>
        <div className={styles.leaderboard__header}>
          <span>Leaderboard</span>
          <button onClick={() => setIsOpenBoard(false)} className={styles.leaderboard__close}>&#10005;</button>
        </div>
        <div className={styles.leaderboard__scroll}>
          {
            users.map((user, id) => (
                <div key={user.first_name}
                     className={cx(styles.leaderboard__user, {[styles.you]: userName === user.first_name})}>
                  <div>
                    <span className={styles.leaderboard__number}>{id < 9 ? `0${id + 1}` : id + 1}.</span>
                    <span className="leaderboard__name">{user.first_name}</span>
                    {userName === user.first_name && <span className={styles.leaderboard__you}>You</span>}
                    <div className={styles.leaderboard__medal}>
                      {id < 3 && <i
                        className={cx("fas fa-medal", {[styles.medalFirst]: id === 0}, {[styles.medalSecond]: id === 1}, {[styles.medalThird]: id === 2})}/>}
                    </div>
                  </div>
                  <span className="leaderboard__score">{user.score}</span>
                </div>
              )
            )}
        </div>
      </div>
    </>
  )
}

export default Leaderboard