import "../theme.scss"
import "../font.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

// IMPORTED IMAGES
import cookieapp from "../IMAGES/cookie_ui.png"
import amunation from "../IMAGES/amunation_ui.jpg"
import favour from "../IMAGES/favour.png"
import bakery from "../IMAGES/bakery.png"
import val from "../IMAGES/valentine.png"
import mailergpt from "../IMAGES/mailergpt.jpg"
import ebook from "../IMAGES/ebook.jpg"
import cookiemenu from "../IMAGES/MENU- COOKIES 2.png"
import ecommerce from "../IMAGES/amunation.jpg"
import portfolio from "../IMAGES/portfolio.jpg"

// IMPORTED IMAGES AND SVGS
import check from "../SVGs/check.svg"
import dot from "../SVGs/white_dot.svg"

// IMPORTED COMPONENTS
import UICard from "../components/UICard";
import WEBCard from "../components/WEBCard";
import Detail from "../components/Detail";

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


export default function Tech () {
    const uiux = [
        {image : {cookieapp}, title : "Cookie web design", desc : "Inspired by a friend of mine who started cookie baking and selling as a business. The cookie app was created to ease customer’s orders" , uilink : "" , alt : "cookie app ui"},
        {image : {amunation}, title : "e-commerce web design", desc : "This website was created to be an affiliate website to market and sell best rated products of different online vendors. It also features a dark theme" , uilink : "" , alt : "ecommerce app ui"},
    ]

    const webdev = [
        {image : {cookiemenu}, title : "Cookie website", desc : "Inspired by a friend of mine who started cookie baking and selling as a business. The cookie app was created to ease customer’s orders" , github : "", weblink : "", alt : "cookie website"},
        {image : {ecommerce}, title : "e-commerce website", desc : "This website was created to be an affiliate website to market and sell best rated products of different online vendors. It also features a dark theme" , github : "", weblink : "", alt : "ecommerce website"},
        {image : {portfolio}, title : "portfolio", desc : "This is my portfolio you’re viewing right now. Built in React js. Made to be as simple as possible" , github : "", weblink : "", alt : "portfolio website"},
    ]

    return (
        <div className="pr-5 pl-5 pb-5 lg:p-5">
            
        </div>
    )
}