import "../theme.scss"
import "../font.scss"
import "../other.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import marketing from "../IMAGES/marketing.jpg";
import improvise from "../IMAGES/improvise.jpg"
import { useState } from "react";

let imgstyle = "img rounded-xl xl:rounded-3xl";

export default function Other () {
    let slideUp = "scale-[1] translate-y-[50%] bottom-[50%]";
    let slideDown = "scale-[.5] -bottom-[20%]";

    const [slide, setSlide] = useState(slideDown);
    const [slide2, setSlide2] = useState(slideDown);

    return (
        <div className="imgcont pr-3 pl-3 pb-3 lg:p-5">
            <div onMouseEnter={()=>{
                    setSlide(slideUp)
                }}
                onMouseLeave={()=>{
                    setSlide(slideDown)
                }}
                className="relative flex justify-center rounded-xl xl:rounded-3xl items-center overflow-hidden w-full h-auto">
                <div ></div>
                <LazyLoadImage src = {marketing} className={imgstyle} placeholderSrc = {marketing} effect= "blur" alt = "marketing"/>
                <h1 className={"card_title white text-center slide_txt " + slide}>AFFILIATE MARKETING</h1>
            </div>
            <div onMouseEnter={()=>{
                    setSlide2(slideUp)
                }}
                onMouseLeave={()=>{
                    setSlide2(slideDown)
                }}
                className="divnest1 relative flex justify-center rounded-xl xl:rounded-3xl items-center overflow-hidden w-full h-auto">
                <div ></div>
                <LazyLoadImage src = {improvise} className={imgstyle} placeholderSrc = {improvise} effect= "blur" alt = "improvisation"/>
                <h1 className={"card_title white text-center slide_txt " + slide2}>IMPROVISATION</h1>
            </div>
        </div>
    )
}