import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <Link to="/" className="navbar-brand mx-5" id="logo">
          <img
            src="./images/repertoirelogo.png"
            alt="Chef Poppy logo"
            style={{ width: "200px", justifyContent: "center" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" id="fancyText">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/recipelist"> All Recipes</Link>{" "}
            </li>
            {/* <li className="nav-item">
              {" "}
              <Link to="/style">Style</Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/ingredient">Ingredient</Link>
            </li> */}
            <li className="nav-item">
              {" "}
              <Link to="/newrecipe">New Recipe</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
