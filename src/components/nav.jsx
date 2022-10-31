import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
