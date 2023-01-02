import Link from "./HeaderLink";
import Leaderboard from "../leaderboard/leaderboard";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {logOut} from "../../redux/reducers/sign";
import './header.scss'



function Header() {
  const [isOpenBoard, setIsOpenBoard] = useState(false)
  const user = useSelector((s) => s.signIn.user)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <header className="header">
      <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight cursor-pointer"
                onClick={() => history.push('/')}
          >Nevis ITDB</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link link="/education">Education</Link>
            <Link link="/homework/list">Homework</Link>
          </div>
          <div>
            <button className="mr-2.5 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-blue-200 mt-4 lg:mt-0" onClick={() => setIsOpenBoard(!isOpenBoard)}>Score: {user.score}</button>
            <button onClick={() => {
              dispatch(logOut())
              history.push('/login')
            }}
               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-blue-200 mt-4 lg:mt-0">Logout</button>
          </div>
        </div>
      </nav>
      <Leaderboard isOpenBoard={isOpenBoard} setIsOpenBoard={setIsOpenBoard} userName={user.first_name}/>
    </header>
  );
}

export default Header;
