import { useState } from "react";
import { CarouselList } from "./images";
import "./Carousel.css";

const Carousel = () => {
  const [currSlide, setCurrSlide] = useState(0);

  function handleChange(dir) {
    if (dir === "prev") {
      if (currSlide == 0) {
        setCurrSlide(CarouselList.length - 1);
      } else {
        setCurrSlide((currSlide) => currSlide - 1);
      }
    } else {
      setCurrSlide((currSlide) => (currSlide + 1) % CarouselList.length);
    }
  }
  return (
    <>
      <h1 className="title">Carousel</h1>
      <div className="container">
        <div
          className="previous"
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleChange("prev");
          }}
        >
          ⬅️
        </div>
        <div className="carousel-container">
          <div className="carousel-tracker">
            {CarouselList.map((item, ind) => (
              <img
                src={item.image}
                alt={item.name}
                key={ind}
                className={
                  currSlide === ind
                    ? "active"
                    : "" || currSlide === ind - 1
                    ? "next-slide"
                    : "" || currSlide === (ind + 1) % 12
                    ? "prev-slide"
                    : ""
                }
              />
            ))}
          </div>
        </div>
        <div
          className="next"
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleChange("next");
          }}
        >
          ➡️
        </div>
      </div>
    </>
  );
};

export default Carousel;
