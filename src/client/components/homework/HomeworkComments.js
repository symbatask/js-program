import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteComment, getComments} from "../../redux/reducers/homeworks";
import {useParams} from "react-router-dom";
import MarkdownToHtml from "../MarkdownToHtml";
import CommentsMDE from "./CommentsMDE";


const HwComments = ({userName}) => {
  const comments = useSelector((s) => s.homeworks.comments)

  const dispatch = useDispatch()
  const {workId} = useParams()

  useEffect(() => {
    dispatch(getComments(+workId, userName))
  }, [dispatch, userName, workId])
  return (
    <div className="homework-comments">
      {
        comments.map((comment, id) => (
          <div className="homework-comments__comment" key={id}>
            <div className="homework-comments__top">
              <div className="homework-comments__name">{comment.user} sent a message:</div>
              <button
                type="button"
                className="homework-comments__delete-btn"
                onClick={() => dispatch(deleteComment(+workId, comment.date))}
              >
                &#10005;</button>
            </div>
            <MarkdownToHtml content={comment.message}/>
            <div className="homework-comments__date">{new Date(comment.date)
              .toLocaleString("en-US",
                {
                  year: 'numeric',
                  month: '2-digit',
                  weekday: 'long',
                  day: '2-digit',
                  hour: 'numeric',
                  minute: 'numeric'
                }
              )}</div>
          </div>
        ))
      }
      <CommentsMDE userName={userName} workId={workId}/>
    </div>
  )
}
export default HwComments