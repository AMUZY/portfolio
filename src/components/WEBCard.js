import "../font.scss"
import "../theme.scss"

import github from "../SVGs/github_black.svg"
import figma from "../SVGs/figma.png"
import eye from "../SVGs/eye.svg"
import redirect from "../SVGs/angle_arrow.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

import { aos_dur } from "../pages/About"
import { aos_style } from "../pages/About"
import { aos_once } from "../pages/About"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

let iconstyle = "m-1 0.02rem";



export default function WEBCard (props){
    return (
        <div className="flex flex-col items-start pt-3 pb-3">
            {/* IMAGE */}
            <LazyLoadImage src = {props.image} className="pic mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {props.image} effect= "blur" alt = {props.alt}/>
            {/* TITLE */}
            <h1 className="white project_title my-2"> {props.title} </h1>
            {/* DESCRIPTION */}
            <h3 className="white text my-2"> {props.desc} </h3>
            {/* BUTTONS */}
            <div className="my-2">
                {/* GITHUB BUTTON */}
                <a href = {props.github} data-aos="fade-left" data-aos-duration={aos_dur} data-aos-offset= "50" data-aos-once= "true" data-aos-delay="" className = "white_col flex flex-row items-center rounded-md my-2 lg:my-4 px-3 py-1">
                    <img src = {github} className={"mx-1 " + iconstyle} alt  = "github icon" />
                    <h3 className=""> View Github </h3>
                    <img src = {redirect} className={"mx-1 " + iconstyle} alt = "redirect icon" />
                </a>
                {/* VIEW WEBSITE BUTTON */}
                <a href = {props.weblink} data-aos="fade-left" data-aos-duration={aos_dur} data-aos-offset= "50" data-aos-once= "true" data-aos-delay="" className = "white_col flex flex-row items-center rounded-md my-2 lg:my-4 px-3 py-1">
                    <img src = {figma} className={"mx-1 " + iconstyle} alt  = "figma icon" />
                </a>
            </div>
        </div>
    )
}