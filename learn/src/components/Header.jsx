import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/state-structure" className="hover:underline">
              State-Structure
            </Link>
          </li>
          <li>
            <Link to="/input-state" className="hover:underline">
              Input-State
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
