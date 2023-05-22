import "../theme.scss"
import "../font.scss"
import "../tech.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import {v4 as uuidv4} from "uuid";

// IMPORTED IMAGES
import cookieapp from "../IMAGES/cookie_ui.png"
import amunation from "../IMAGES/amunation_ui.jpg"
import favour from "../IMAGES/favour.jpg"
import bakery from "../IMAGES/bakery.png"
import val from "../IMAGES/valentine.png"
import mailergpt from "../IMAGES/mailergpt.jpg"
import ebook from "../IMAGES/ebook.jpg"
import cookiemenu from "../IMAGES/MENU- COOKIES 2.png"
import ecommerce from "../IMAGES/amunation.jpg"
import portfolio from "../IMAGES/portfolio.jpg"
import download from "../SVGs/download.svg"
import arrow from "../SVGs/angle_arrow.svg"
import ig from "../SVGs/ig_black.svg"

// IMPORTED IMAGES AND SVGS
import check from "../SVGs/check.svg"
import dot from "../SVGs/white_dot.svg"

// IMPORTED COMPONENTS
import UICard from "../components/UICard";
import WEBCard from "../components/WEBCard";
import Detail from "../components/Detail";
import TechBtn from "../components/TechBtn";
import TechBtn2 from "../components/TechBtn2";

import { aos_style } from "./About";
import { aos_once } from "./About";
import { aos_dur } from "./About";

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

  let titlestyle = "white name_title mt-10 mb-2";
  let skillstyle = "text leading-relaxed white mx-3";
  let anchorstyle = "flex flex-row text hover:underline card_col px-2 py-1 rounded-full leading-relaxed white my-2 mr-3";
  let iconstyle = "0.02rem my-2 mr-3"
  let skilldiv = "flex my-1 w-32 md:w-48 lg:w-64 flex-row justify-start items-center"

export default function Tech () {
    const uiux = [
        {image : cookieapp, title : "Cookie web design", desc : "Inspired by a friend of mine who started cookie baking and selling as a business. The cookie app was created to ease customer’s orders" , uilink : "" , alt : "cookie app ui"},
        {image : amunation, title : "e-commerce web design", desc : "This website was created to be an affiliate website to market and sell best rated products of different online vendors. It also features a dark theme" , uilink : "" , alt : "ecommerce app ui"},
    ]

    const webdev = [
        {image : cookiemenu, title : "Cookie website", desc : "Inspired by a friend of mine who started cookie baking and selling as a business. The cookie app was created to ease customer’s orders" , github : "", weblink : "", alt : "cookie website"},
        {image : ecommerce, title : "e-commerce website", desc : "This website was created to be an affiliate website to market and sell best rated products of different online vendors. It also features a dark theme" , github : "", weblink : "", alt : "ecommerce website"},
        {image : portfolio, title : "portfolio", desc : "This is my portfolio you’re viewing right now. Built in React js. Made to be as simple as possible" , github : "", weblink : "", alt : "portfolio website"},
    ]

    const ui_detail = [
        {title : "Proficiency", answer : "70%"},
        {title : "From", answer : "20/01/2023"},
        {title : "Softwares", answer : "Figma"},
        {title : "Projects" , answer : "Cookie web design, e-commerce web design"}
    ]

    const graphics_detail = [
        {title : "Proficiency", answer : "80%"},
        {title : "From", answer : "10/08/2022"},
        {title : "Softwares" , answer : "Figma, Blender"},
        {title : "Projects", answer : "voice over flyer, bakery flyer,valentine promo sales, kitchen services, youtube thumbnails, e.t.c."}
    ]

    const threedgraphics_detail = [
        {title : "Brand name", answer : "amunation"},
        {title : "Proficiency", answer : "90%"},
        {title : "From", answer : "08/01/2020"},
        {title : "Softwares" , answer : "Blender"},
        {title : "Projects", answer : "flyers, MockUps, 3d character design"}
    ]

    const animation_detail = [
        {title : "Brand name", answer : "amunation"},
        {title : "Proficiency", answer : "90%"},
        {title : "From", answer : "15/02/2020"},
        {title : "Softwares" , answer : "Blender"},
        {title : "Projects", answer : "business ads, NFT animations for whitelist, product animations"}
    ]

    const webdev_detail = [
        {title : "Proficiency", answer : "80%"},
        {title : "From", answer : "22/10/2022"},
        {title : "Softwares" , answer : "Chrome, Microsoft Edge, visual studio code, React js"},
        {title : "Projects", answer : "Cookie web design, e-commerce, portfolio"}
    ]

    // document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
    //     anchor.addEventListener('click', function (e){
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute("href")).scrollIntoView({
    //             behavior : "smooth"
    //         })
    //     })
    // })

    function ScrollToTitle(href){
        document.querySelector("#" + href).scrollIntoView({
            behavior : "smooth"
        })
    }

    return (
        <div className="pr-3 pl-3 pb-3 lg:p-5">
            <div className="py-0 px-2 overflow-hidden">
                <h1 id = "skillset" className="white name_title mb-3"> My Skillset </h1>
                {/* ALL SKILLSET */}
                <div className="flex flex-row flex-wrap items-center justify-between md:justify-start mt-3 mb-2 lg:my-4">
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="10" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="50" data-aos-once= {aos_once} className={skillstyle}>HTML</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="100" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="150" data-aos-once= {aos_once} className={skillstyle}>C++</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="200" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="250" data-aos-once= {aos_once} className={skillstyle}>FIGMA</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="300" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="350" data-aos-once= {aos_once} className={skillstyle}>3D ANIMATION</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="400" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="450" data-aos-once= {aos_once} className={skillstyle}>REACT JS</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="500" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="550" data-aos-once= {aos_once} className={skillstyle}>CSS</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="600" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="650" data-aos-once= {aos_once} className={skillstyle}>JAVASCRIPT</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="700" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="750" data-aos-once= {aos_once} className={skillstyle}>GRAPHICS DESIGN</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="800" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="850" data-aos-once= {aos_once} className={skillstyle}>GIT</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="900" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="950" data-aos-once= {aos_once} className={skillstyle}>TAILWIND CSS</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1000" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1050" data-aos-once= {aos_once} className={skillstyle}>SASS/SCSS</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1100" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1150" data-aos-once= {aos_once} className={skillstyle}>GITHUB</h3>
                    </div>
                    <div className={skilldiv}>
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1200" className  = {iconstyle} src={check} alt = "check"/>
                        <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1250" data-aos-once= {aos_once} className={skillstyle}>3D GRAPHICS DESIGN</h3>
                    </div>
                </div>
                {/* MY CORE TECH STACK */}
                <h1 className={titlestyle}> My core tech stack </h1>
                {/* TECH STACK */}
                <div className="flex flex-col flex-wrap justify-center items-start my-1 lg:my-4">
                    <div className="w-full flex flex-row">
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1350"  className  = {iconstyle} src={dot} alt = "dot"/>
                        <button onClick={()=>{
                        ScrollToTitle("uiux")
                        }}   data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1300"  className={anchorstyle}>ui/ux design</button>
                    </div>
                        
                    <div className="w-full flex flex-row">
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1450"  className  = {iconstyle} src={dot} alt = "dot"/>
                        <button onClick={()=>{
                            ScrollToTitle("graphics")
                        }}  data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1400" data-aos-once= {aos_once} className={anchorstyle}>graphics design</button>
                    </div>

                    <div className="w-full flex flex-row">
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1550"  className  = {iconstyle} src={dot} alt = "dot"/>
                        <button onClick={()=>{
                            ScrollToTitle("dgraphics")
                        }}  data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1500" data-aos-once= {aos_once} className={anchorstyle}>3d graphics design</button>
                    </div>
                    
                    <div className="w-full flex flex-row">
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1700" className  = {iconstyle} src={dot} alt = "dot"/>
                        <button onClick={()=>{
                            ScrollToTitle("animation")
                        }}  data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1650" className={anchorstyle}>3d animation</button>
                    </div>
                   
                    <div className="w-full flex flex-row">
                        <img data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1800"  className  = {iconstyle} src={dot} alt = "dot"/>
                        <button onClick={()=>{
                            ScrollToTitle("webdev")
                        }} data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1750"  className={anchorstyle}>front end web development</button>
                    </div>
                   
                </div>

                {/* UI/UX DESIGN */}
                <h1 id = "uiux" className={titlestyle}> UI/UX DESIGN </h1>
                {/* UI/UX DETAILS */}
                <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                    {/* DETAILS DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            ui_detail.map((item)=>{
                                return(
                                    <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                                )
                            })
                        }
                    </div>
                    {/* UI CARD DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            uiux.map((item)=>{
                                return (
                                    <UICard image = {item.image} title = {item.title} desc = {item.desc} uilink = {item.uilink} alt = {item.alt} />
                                )
                            })
                        }
                    </div>
                </div>

                {/* GO BACK TO TOP */}
                <button onClick = {()=>{ ScrollToTitle("skillset")}} className="flex hover:underline flex-row text white items-center my-1 lg:my-4"><img className="mx-2" src = {dot} alt = "white dot"/> go back to top <img className="mx-2" src = {dot} alt = "white dot"/></button>

                {/* GRAPHICS DESIGN */}
                <h1 id = "graphics" className={titlestyle}> GRAPHICS DESIGN </h1>
                {/* GRAPHICS DESIGN DETAILS */}
                <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                    {/* DETAILS DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            graphics_detail.map((item)=>{
                                return(
                                    <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                                )
                            })
                        }
                    </div>
                    {/* GRAPHICS DESIGN PICTURES DIV */}
                    <div className="graphics">
                        <image id = "pic-1">
                            <LazyLoadImage src = {favour} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {favour} effect= "blur" alt = "voice over graphics design"/>
                        </image>
                        <image id = "pic-2">
                            <LazyLoadImage src = {bakery} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {bakery} effect= "blur" alt = "bakery graphics design"/>
                        </image>
                        <image id = "pic-3">
                            <LazyLoadImage src = {val} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {val} effect= "blur" alt = "valentines package graphics design"/>
                        </image>
                        <image id = "pic-4">
                            <LazyLoadImage src = {mailergpt} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {mailergpt} effect= "blur" alt = "mailergpt thumbnail design"/>
                        </image>
                        <image id = "pic-5">
                            <LazyLoadImage src = {ebook} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {ebook} effect= "blur" alt = "ebook studio thumbnail design"/>
                        </image>
                    </div>
                </div>

                {/* GO BACK TO TOP */}
                <button onClick = {()=>{ ScrollToTitle("skillset")}} className="flex hover:underline flex-row text white items-center my-1 lg:my-4"><img className="mx-2" src = {dot} alt = "white dot"/> go back to top <img className="mx-2" src = {dot} alt = "white dot"/></button>

                {/* 3D GRAPHICS DESIGN */}
                <h1 id = "dgraphics" className={titlestyle}> 3D GRAPHICS DESIGN </h1>
                {/* 3D GRAPHICS DESIGN DETAILS */}
                <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                    {/* DETAILS DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            threedgraphics_detail.map((item)=>{
                                return(
                                    <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                                )
                            })
                        }
                    </div>
                    {/* BUTTON */}
                    <TechBtn link = "" icon = {download} text = "Download 3D portfolio" alt = "download icon"/>
                </div>

                {/* 3D ANIMATION */}
                <h1 id = "animation" className={titlestyle}> 3D ANIMATION </h1>
                {/* 3D ANIMATION DETAILS */}
                <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                    {/* DETAILS DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            animation_detail.map((item)=>{
                                return(
                                    <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                                )
                            })
                        }
                    </div>
                    {/* BUTTON */}
                    <TechBtn2 link = "" icon = {ig} icon2 = {arrow} text = "View on IG" alt = "download icon" alt2 = "download icon"/>
                </div>

                
                {/* WEB DEVELOPMENT */}
                <h1 id = "webdev" className={titlestyle}> FRONT END WEB DEVELOPMENT </h1>
                {/* UWEB DEVELOPMENT */}
                <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                    {/* DETAILS DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            webdev_detail.map((item)=>{
                                return(
                                    <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                                )
                            })
                        }
                    </div>
                    {/* WEB DEV CARD DIV */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {
                            webdev.map((item)=>{
                                return (
                                    <WEBCard image = {item.image} title = {item.title} desc = {item.desc} github = {item.github} icon = {item.icon} weblink = {item.weblink} alt = {item.alt} />
                                )
                            })
                        }
                    </div>
                </div>

                {/* GO BACK TO TOP */}
                <button onClick = {()=>{ ScrollToTitle("skillset")}} className="flex hover:underline flex-row text white items-center my-1 lg:my-4"><img className="mx-2" src = {dot} alt = "white dot"/> go back to top <img className="mx-2" src = {dot} alt = "white dot"/></button>
            </div>
        </div>
    )
}