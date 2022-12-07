import { Link } from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";

function Nav() {
  return (
    <div className="nav-bar">
       <Link to="/" className="nav-link">
        {/* <BsHouseDoorFill color="white" size={24}/> */}
        <h1>NC-NEWS</h1>
        </Link>
      <nav>
 
        <Link to="/articles" className="nav-link">
          All articles
        </Link>
        <Link to="/topics" className="nav-link">
          Topics
        </Link>
      </nav>
   
    </div>
  );
}

export default Nav;
