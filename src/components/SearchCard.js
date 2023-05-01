import "../button.scss";
import "../theme.scss";
import "../font.scss";
import "../navbar.scss";
import "../card.scss";
import {v4 as uuidv4} from "uuid"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
// import placeholder from "../PICTURES/placeholder.png"

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

let imgcount = [1];


export default function SearchCard (props){
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <h1 className="w-max h-max subtitle_semibold">NAME:</h1> */}
            <h1 className="mb-4 title"> {props.title} </h1>
            <h1 className="w-max h-max subtitle_semibold">DESCRIPTION:</h1>
            <h1 className="mb-4 subtitle grey"> {props.subtitle} </h1>
            <div className="mb-4 min-h-[50px] searchimgCont max-w-full h-auto px-8 flex flex-row items-center">
              <LazyLoadImage effect="blur" src = {props.image} placeholderSrc= {props.image} className="z-[0] flex-shrink-0 w-[inherit] h-[inherit] "/>
            </div>
            <h1 className="w-max h-max subtitle_semibold">PRICE:</h1>
            <h1 className="mb-4 subtitle"> {"₦" + props.price} </h1>
            <h1 className="w-max h-max subtitle_semibold">RATING:</h1>
            {/* <img className = "mb-4 w-40 grey" src = {props.star} /> */}
            {
              imgcount.map(()=>{
                if(props.star === "one"){
                  return (
                    <img
                    key = {uuidv4()}
                    className = "mb-4 w-40 grey"
                    src={one}
                    alt="rating stars"
                  />
                  )
                }
                else if(props.star === "two"){
                  return (
                    <img
                    key = {uuidv4()}
                    className = "mb-4 w-40 grey"
                    src={two}
                    alt="rating stars"
                  />
                  )
                }
                else if(props.star === "three"){
                  return (
                    <img
                    key = {uuidv4()}
                    className = "mb-4 w-40 grey"
                    src={three}
                    alt="rating stars"
                  />
                  )
                }
                else if(props.star === "four"){
                  return (
                    <img
                    key = {uuidv4()}
                    className = "mb-4 w-40 grey"
                    src={four}
                    alt="rating stars"
                  />
                  )
                }
                else if(props.star === "four_half"){
                  return (
                    <img
                    key = {uuidv4()}
                    className = "mb-4 w-40 grey"
                    src={four_half}
                    alt="rating stars"
                  />
                  )
                }
                else if(props.star === "five"){
                  return (
                    <img
                    key = {uuidv4()}
                    className = "mb-4 w-40 grey"
                    src={five}
                    alt="rating stars"
                  />
                  )
                }
            })
            }
            <h1 className="w-max h-max subtitle_semibold">SPECIFICATIONS:</h1>
            <h1 className="mb-4 subtitle grey"> {props.spec} </h1>
            {/* PURCHASE LINK */}
            <a
              href={props.prodlink}
              type="button"
              className="mt-[6px] w-full md:w-auto pur_btn theme_col white "
            >
              <h2 className="w-full text-center subtitle_semibold">Purchase</h2>
            </a>
        </div>
    )
}