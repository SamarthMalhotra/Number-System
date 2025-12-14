import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-black fixed-top z-100"
      aria-label="Tenth navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler text-light bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-start"
          id="navbarsExample08"
        >
          <ul className="navbar-nav ">
            <li className="nav-item text-light">
              <h2>Number System</h2>
            </li>
            <li className="nav-item">
              <Link to="/docs" className="nav-link li-tag">
                Docs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link li-tag" to="/binary">
                Binary
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/octal" className="nav-link li-tag">
                Octal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hexadecimal" className="nav-link li-tag">
                Hexadecimal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
