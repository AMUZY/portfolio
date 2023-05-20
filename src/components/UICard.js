import "../font.scss"
import "../theme.scss"
import "../allcards.scss"

import figma from "../SVGs/figma.png"
import redirect from "../SVGs/angle_arrow.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';


let iconstyle = "m-1 0.02rem";



export default function UICard (props){
    return (
        <div className="flex flex-col items-start pt-3 pb-3 my-2 mx-2 md:m-3">
            {/* IMAGE */}
            <div className="piccont rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden mb-2">
                <LazyLoadImage src = {props.image} className="pic mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {props.image} effect= "blur" alt = {props.alt}/>
            </div>
            {/* TITLE */}
            <h1 className="white project_title my-2"> {props.title} </h1>
            {/* DESCRIPTION */}
            <h3 className="white text my-2"> {props.desc} </h3>
            {/* BUTTON */}
            <a href = {props.uilink} className = "white_col flex flex-row items-center justify-center rounded-md w-full md:w-auto my-2 lg:my-4 px-3 py-1">
                <img src = {figma} className={"mx-1 " + iconstyle} alt  = "figma icon" />
                <h3 className="text"> View figma </h3>
                <img src = {redirect} className={"mx-1 " + iconstyle} alt = "redirect icon" />
            </a>
        </div>
    )
}