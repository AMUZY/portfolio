import "../button.scss";
import "../theme.scss";
import "../font.scss";
import "../navbar.scss";
import "../card.scss";

import larrow from "../SVGs/l_arrow.svg";
import rarrow from "../SVGs/r_arrow.svg";
import product from "../PICTURES/product.jpg";
import product2 from "../PICTURES/product2.jpg";
import bluearrow from "../SVGs/r_b_arrow.svg";

// STARS IMPORT
import one from "../SVGs/1_star.svg";
import one_half from "../SVGs/1_5_star.svg";
import two from "../SVGs/2_star.svg";
import two_half from "../SVGs/2_5_star.svg";
import three from "../SVGs/3_star.svg";
import three_half from "../SVGs/3_5_star.svg";
import four from "../SVGs/4_star.svg";
import four_half from "../SVGs/4_5_star.svg";
import five from "../SVGs/5_star.svg";

// IMPORTED REACT COMPONENTS
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// import { useEffect } from "react"

export default function ExpCard (props) {
  const [pos, setPos] = useState(0);
  const [slide, setSlide] = useState("top-0 left-0");
  const [animate, setAnimate] = useState("");

  // if(props.src.length === 1){
  //     setRightbtncol("unclick_col");
  // }

  // const products = props.products;
  // console.log(products);

  // ADD MAX OF 6 IMAGES HERE!
  // THE HEIGHT OF ALL IMAGES ARE INHERITED FROM PARENT

  // w-[80px] md:w-[100px] xl:w-[201px]

  // TO INCREASE THE IMAGE NUMBER LIMIT, ADD ELSE IF WITH +100%
  function leftslide() {
    if (pos === 1) {
      setSlide("top-0 left-0");
    } else if (pos === 2) {
      setSlide("top-0 left-[-100%] ");
    } else if (pos === 3) {
      setSlide("top-0 left-[-200%] ");
    } else if (pos === 4) {
      setSlide("top-0 left-[-300%] ");
    } else if (pos === 5) {
      setSlide("top-0 left-[-400%] ");
    } else if (pos === 6) {
      setSlide("top-0 left-[-500%] ");
    }
  }

  function rightslide() {
    if (pos === 0) {
      setSlide("top-0 left-[-100%] ");
    }
    if (pos === 1) {
      setSlide("top-0 left-[-200%] ");
    }
    if (pos === 2) {
      setSlide("top-0 left-[-300%] ");
    }
    if (pos === 3) {
      setSlide("top-0 left-[-400%] ");
    }
    if (pos === 4) {
      setSlide("top-0 left-[-500%] ");
    }
    if (pos === 5) {
      setSlide("top-0 left-[-600%] ");
    }
  }

  return (
    // CARD DIV
    <div className="flex my-2 h-auto items-center reg_shadow white_col rounded-lg flex-col md:my-3 md:p-3 lg:my-4 xl:flex-row">
      {/* IMAGES AND SPAN DIV */}
      <div className="w-full mx-auto mt-2 xl:px-auto xl:my-2 xl:w-[40%]">
        {/* IMAGES DIV */}
        <div className="mx-auto flex justify-center items-center">
          {/* MAIN IMAGES DIV */}
          <div className="overflow-hidden relative rounded-md w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] xl:w-[18rem] xl:h-[18rem] xl:rounded-lg">
            {/* SLIDING IMAGES DIV */}
            <div
              className={
                "absolute w-[inherit] h-[inherit] flex flex-row imgtime " +
                slide
              }
            >
              <img
                key={uuidv4()}
                className="z-[0] flex-shrink-0 w-[inherit] h-[inherit] "
                src={props.src}
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>

      {/* INFO DIV */}
      <div className="w-full h-full p-[8px] xl:p-[16px] flex flex-row flex-wrap xl:w-[60%]">
        {/* TITLE AND DESCRIPTION */}
        <div className="w-full self-start">
          {/* TITLE */}
          <h2 className="md:my-[3px] xl:my-[6px] text">{props.title}</h2>
          {/* SUBTITLE */}
          <h3 className="hidden md:inline-block md:my-[3px] xl:my-[6px] desc grey">
            {props.subtitle}
          </h3>
        </div>
        {/* SPECS, PRICE, STARS AND BUTTON */}
        <div className="w-full self-end">
          {/* VIEW SPECIFICATIONS DIV */}
          <button
            className="md:my-[3px] xl:my-[6px] flex flex-row items-center"
            onClick={() => {
              props.OpenSpec(
                props.title,
                props.subtitle,
                props.use
              );
            }}
          >
            <h4 className="others specs text-left">View description</h4>
            <img className="mx-1 specs" src={bluearrow} alt="left arrow" />
          </button>
          {/* BUTTON */}
          <div className="mt-[8px] mb-[2px] md:my-[3px] xl:my-[6px] flex flex-col items-start md:flex-row md:items-center justify-between">
            {/* PURCHASE BUTTON */}
            <a
              href={props.prodlink}
              type="button"
              onClick={() => {
                console.log(props.prodlink);
                setAnimate("animate");
              }}
              onTouchEnd={() => {
                setAnimate("");
              }}
              className={
                "mt-[6px] w-full md:w-auto pur_btn theme_col white " + animate
              }
            >
              <h2 className="w-full text-center text_semibold">Get it Now</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
