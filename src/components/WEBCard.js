import "../font.scss"
import "../theme.scss"
import "../allcards.scss"

import github from "../SVGs/github_black.svg"
import eye from "../SVGs/eye.svg"
import redirect from "../SVGs/angle_arrow.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';


let iconstyle = "m-1 0.02rem";



export default function WEBCard (props){
    return (
        <div className="flex flex-grow xl:w-[48%] md:flex-grow-0 flex-col items-start pt-3 pb-3 my-2 mx-2 md:m-3">
            {/* IMAGE */}
            <div className="piccont rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden mb-2">
                <LazyLoadImage src = {props.image} className="pic mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {props.image} effect= "blur" alt = {props.alt}/>
            </div>
            {/* TITLE */}
            <h1 className="white project_title my-2"> {props.title} </h1>
            {/* DESCRIPTION */}
            <h3 className="white text_italic my-2"> {props.desc} </h3>
            {/* BUTTONS */}
            <div className="my-2 flex flex-row">
                {/* GITHUB BUTTON */}
                <a href = {props.github} className = "white_col flex flex-row items-center rounded-md my-2 lg:my-4 px-3 py-1">
                    <img src = {github} className={"mx-1 " + iconstyle} alt  = {props.alt} />
                    <h3 className="text"> View Github </h3>
                    <img src = {redirect} className={"mx-1 " + iconstyle} alt = "redirect icon" />
                </a>
                {/* VIEW WEBSITE BUTTON */}
                <a href = {props.weblink} className = "white_col flex flex-row items-center rounded-md my-2 mx-2 lg:my-4 px-2 py-1">
                    <img src = {eye} className={"mx-1 " + iconstyle} alt  = "link icon" />
                </a>
            </div>
        </div>
    )
}