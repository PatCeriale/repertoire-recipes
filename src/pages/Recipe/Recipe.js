import "./Recipe.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function RecipeList() {
  return (
    <div className="Home">
      <h1>(Recipe Title)</h1>
      <div className="RecipeCard">
        <div className="card" style={{ width: "90vw" }}>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garlic-spaghetti-horizontal-1539203011.jpg?crop=1.00xw:0.752xh;0,0.108xh&resize=1200:*"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">(description)</p>
            <h5 className="card-title">
              Prep Time: (prep-time) Cook Time: (cook-time)
            </h5>
            <h5 className="card-title"></h5>
            <h5 className="card-title">Ingredients</h5>
            <ul className="card-text">
              <li>map over ingredients array</li>
              <li>map over ingredients array</li>
            </ul>
            <h5 className="card-title">Preparation</h5>
            <ol className="card-text">
              <li>map over preparation array</li>
              <li>map over preparation array</li>
            </ol>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
