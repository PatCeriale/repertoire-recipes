import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export default function RecipeCard() {
  return (
    <div className="RecipeCard">
      <div className="card" style={{ width: "90vw" }}>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garlic-spaghetti-horizontal-1539203011.jpg?crop=1.00xw:0.752xh;0,0.108xh&resize=1200:*"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
}
