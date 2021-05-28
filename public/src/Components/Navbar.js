import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/people">
            People
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
