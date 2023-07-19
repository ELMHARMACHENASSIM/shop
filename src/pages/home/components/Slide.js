import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../../assets/images/image1.jpg";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function Slide() {
  return (
    <div className="container slidediv">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="showbtn active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className="showbtn"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className="showbtn"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="content">
              <div className="image">
                <img src={img1} alt="" srcSet="" />
              </div>
              <div className="info">
                <h1>lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="addto">add to cart</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="content">
              <div className="image">
                <img src={img1} alt="" srcSet="" />
              </div>
              <div className="info">
                <h1>lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="addto">add to cart</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="content">
              <div className="image">
                <img src={img1} alt="" srcSet="" />
              </div>
              <div className="info">
                <h1>lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="addto">add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon spanbtn" aria-hidden="true">
            <FontAwesomeIcon icon={faChevronLeft} className="iconslid" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon spanbtn" aria-hidden="true">
            <FontAwesomeIcon icon={faChevronRight} className="iconslid" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slide;
