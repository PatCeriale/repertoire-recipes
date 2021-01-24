import "./Home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Home">
      <div className="card" style={{ width: "90vw" }}>
        <h3>Welcome to Repertoire Recipes!</h3>
        <hr />
        <p>
          Have you recently found a new tasty recipe and want to save it for
          later? Add it to your <i>Repertoire</i> and cook up a meal momma would
          be proud of!
        </p>
        <div id="carousel-box">
          {" "}
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjM6V082IrBfePHP-PXYRDlOPsMXS3qeo3_w&usqp=CAU"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjM6V082IrBfePHP-PXYRDlOPsMXS3qeo3_w&usqp=CAU"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjM6V082IrBfePHP-PXYRDlOPsMXS3qeo3_w&usqp=CAU"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <br />
        <h5>Search recipes by:</h5>
        <ul>
          <li>
            <Link to="/style">Style</Link>
          </li>
          <li>
            <Link to="/ingredient">Ingredient</Link>
          </li>
          <li>
            {" "}
            <Link to="/allrecipes"> All Recipes</Link>
          </li>
        </ul>
      </div>
      <div className="chef-poppy">
        <img
          src="./images/chefpopples.png"
          alt="Chef Poppy"
          style={{ width: "50vw" }}
        />
        <h5>
          <i>Repertoire Recipes</i> is Chef Poppy approved
        </h5>
      </div>
    </div>
  );
}
