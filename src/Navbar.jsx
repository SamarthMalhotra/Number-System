import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      {" "}
      <h2 className="p-sm-3 position-fixed top-0 end-0  mt-2 me-3 fs-2 text-light z-3 bg-dark d-lg-none d-block">
        Number System
      </h2>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark position-fixed  top-0  w-100 z-2"
        aria-label="Tenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler  bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-dark"></span>
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
                <Link to="/" className="nav-link li-tag">
                  Home
                </Link>
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
    </>
  );
}
