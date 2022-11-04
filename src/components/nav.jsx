import { Link } from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";

function Nav() {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/" className="nav-link">
        <BsHouseDoorFill color="white" size={24}/>
        </Link>
        <Link to="/articles" className="nav-link">
          All articles
        </Link>
        <Link to="/topics" className="nav-link">
          Topics
        </Link>
      </nav>
      <div className="separator"></div>
    </div>
  );
}

export default Nav;
