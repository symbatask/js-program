import { NavLink } from "react-router-dom";

const HeaderLink = ({link, children}) => {
  return <NavLink to={link}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4"
  >{children}</NavLink>
}

export default HeaderLink