import "./Recipe.css";
// import RecipeCard from "../../components/RecipeCard/RecipeCard";

// onClick function for updating recipe

// onClick function for deleting recipe, add alert asking if the person is sure or ask for password

export default function RecipeList() {
  return (
    <div className="Recipe">
      <div className="card RecipeCard" style={{ width: "90vw" }}>
        <h1 id="fancyText">(Recipe Title)</h1>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garlic-spaghetti-horizontal-1539203011.jpg?crop=1.00xw:0.752xh;0,0.108xh&resize=1200:*"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">(description)</p>
          <h5 className="card-title">
            Prep Time: (preptime) Cook Time: (cooktime)
          </h5>
          <h5 className="card-title">Serving Size: (servingsize)</h5>
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
        </div>
        <hr />
        <div id="buttonBox">
          <button id="leftBtn">
            <i class="fas fa-wrench"></i> Update
          </button>
          {"               "}
          <button id="rightBtn">
            <i class="far fa-trash-alt"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
