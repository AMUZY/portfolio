import "../button.scss"
import "../theme.scss"
import "../font.scss"
import "../home.scss"
import KongaDefault from "./Konga/kongaDefault"
import { NavLink } from "react-router-dom"
import {v4 as uuidv4} from "uuid" 
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';


// IMPORTED SVG
import jvzoo from "../PICTURES/jvzoo.png"
import logo from "../SVGs/logo.svg"
import picmobile from "../PICTURES/homepic_mobile.jpg" 
import pictablet from "../PICTURES/homepic_tablet.jpg" 
import picdesktop from "../PICTURES/homepic_desktop.jpg" 
import createacc from "../SVGs/create_acc.svg"
import getback from "../SVGs/get_back.svg"
import clickpur from "../SVGs/click_pur.svg"
import arrow from "../SVGs/longarrow.svg"

// import bg from "../PICTURES/amunation_bg.png"

// VNEDOR IMAGES
import jumia from "../PICTURES/jumia_link_desktop.jpg"
import konga from "../PICTURES/konga_link_desktop.jpg"
import expertnaire from "../PICTURES/expertnaire_link_desktop.jpg"
import { useEffect } from "react"



export default function Home(props) {
    const vendors = [
        // {name : "JUMIA" , src : jumia , href : "/jumia",  alt : "jumia online shopping mall"},
        // {name : "KONGA" , src : konga , href : KongaDefault("konga"),  alt : "konga online shopping mall"},
        // {name : "EXPERTNAIRE" , src : expertnaire , href : "/expertnaire/exp-products",  alt : "expertnaire, platform for digital products"},
        {name : "JVZOO" , src : jvzoo , href : "/expertnaire/exp-products",  alt : "jvzoo, platform for digital products"},
    ]


    return (
        <div className="relative overflow-hidden flex flex-col items-center py-8 md:py-12 xl:py-16">
            {/* BACKGROUND IMAGE */}
            <div className = "z-[-1] w-full h-full absolute bg"></div>
                {/* LOGO,AMUNATION,TITLE,SUBTITLE */}
                <div className="w-[80%] md:w-[60%] xl:w-[50%]">
                    {/* LOGO AND AMUNATION */}
                    <div className="mx-10 my-3">
                        {/* LOGO */}
                        <img src = {logo} className="mx-auto w-[30px] md:w-[40px] xl:w-[50px]" alt = "amunation logo"/>
                        {/* AMUNATION */}
                        <h2 className="subtitle_semibold text-center theme">
                            amunation
                        </h2>
                    </div>
                    {/* TITLE,SUBTITLE */}
                    <div className="w-full">
                        {/* TITLE */}
                        <h1 className="title text-center mx-auto my-2">
                            Shop digital and physical products by online vendors all from one place 
                        </h1>
                        {/* SUBTITLE */}
                        <h2 className="subtitle grey text-center w-[80%] mx-auto my-2">
                            We've done all the hardwork by selecting only products that have the best reviews!
                        </h2>
                    </div>
                </div>

                {/* IMAGE DIV */}
                <div className="max-w-[92%] mt-10 mb-16">
                        <LazyLoadImage src = {picdesktop} className="mx-auto" placeholderSrc = {picdesktop} effect= "blur" alt = "home pic"/>
                </div>

            <div className="w-full h-max flex flex-col items-center" >
                {/* MAKE AN ORDER */}
                <div className="order-2 max-w-[80%] my-5 xl:my-16 xl:order-1">
                    {/* HEADING DIV */}
                    <div className="flex flex-row justify-center">
                        {/* MAKE AN ORDER HEADING */}
                        <h2 className="theme flex flex-row flex-wrap justify-center subtitle_semibold">MAKE AN ORDER IN THREE EASY STEPS</h2>
                    </div>
                    {/* ICONS DIV */}
                    <div className="my-5 flex justify-center flex-col xl:flex-row">
                        {/* CREATE */}
                        <div className = "mx-auto flex flex-col items-center">
                            {/* CREATE ICON */}
                            <div className = "m-5 p-5 w-max rounded-xl icon_shadow">
                                <img className = "w-[20px] md:w-[30px] xl:w-[40px]" src= {createacc} alt = "create account"/>
                            </div>
                            {/* TITLE,SUBTITLE */}
                            <div className="w-full">
                                {/* TITLE */}
                                <h2 className="subtitle_semibold text-center mx-auto my-2">
                                    Create account with vendor(for non-digital products)
                                </h2>
                                {/* SUBTITLE */}
                                <h3 className="text grey text-center w-[80%] mx-auto my-2">
                                    Go create an account with your preferred vendor through their website or app
                                </h3>
                            </div>
                        </div>

                        {/* ARROW 1 */}
                        <img className = "hidden xl:inline-block" src = {arrow} alt = "directional arrow" />

                        {/* COME BACK */}
                        <div className = "mx-auto flex flex-col items-center">
                            {/* CREATE ICON */}
                            <div className = "m-5 p-5 w-max rounded-xl icon_shadow">
                                <img className = "w-[20px] md:w-[30px] xl:w-[40px]" src= {getback} alt = "come back to amunation.io"/>
                            </div>
                            {/* TITLE,SUBTITLE */}
                            <div className="w-full">
                                {/* TITLE */}
                                <h2 className="subtitle_semibold text-center mx-auto my-2">
                                    Come back here
                                </h2>
                                {/* SUBTITLE */}
                                <h3 className="text grey text-center w-[80%] mx-auto my-2">
                                    Get back here and select the product of your choice 
                                </h3>
                            </div>
                        </div>

                        {/* ARROW 2 */}
                        <img className = "hidden xl:inline-block" src = {arrow} alt = "directional arrow" />

                        {/* CLICK PURCHASE */}
                        <div className = "mx-auto flex flex-col items-center">
                            {/* CREATE ICON */}
                            <div className = "m-5 p-5 w-max rounded-xl icon_shadow">
                                <img className = "w-[20px] md:w-[30px] xl:w-[40px]" src= {clickpur} alt = "click purchase button"/>
                            </div>
                            {/* TITLE,SUBTITLE */}
                            <div className="w-full">
                                {/* TITLE */}
                                <h2 className="subtitle_semibold text-center mx-auto my-2">
                                    Click purchase
                                </h2>
                                {/* SUBTITLE */}
                                <h3 className="text grey text-center w-[80%] mx-auto my-2">
                                    Click the purchase button to go directly to the store and make that order!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VENDORS HEADING, DIV */}
                <div className="rounded-2xl flex flex-col items-center w-[92%] my-5 px-14 py-8 md:w-[60%] xl:w-[80%] xl:my-16 xl:p-14 section_col xl:order-2">
                    {/* HEADING DIV */}
                    <div className="flex flex-row justify-center">
                        {/* OUR VENDORS */}
                        <h2 className="theme subtitle_semibold"> OUR VENDORS </h2>
                    </div>
                    {/* VENDORS DIV */}
                    <div className="my-5 flex justify-center flex-col xl:flex-row xl:flex-wrap xl:w-full">
                        {
                            vendors.map((item)=>{
                                return (
                                    <div className = "vendor p-3 m-5 white_col icon_shadow xl:mx-8"
                                        key = {uuidv4()}>
                                        {/* VENDOR NAME */}
                                        <div className = "m-2 p-2 w-max rounded-xl icon_shadow">
                                            <h2 className="subtitle_semibold">
                                                {item.name}
                                            </h2>
                                        </div>
                                        {/* VENDOR IMAGE */}
                                        <div className="w-full">
                                            <img className = "mx-auto" src = {item.src} alt = {item.href} />
                                        </div>
                                        {/* VENDOR BUTTON */}
                                        <div>
                                            <NavLink className="theme_col reg_shadow px-[12px] py-[6px] rounded-lg"
                                            to = {item.href}
                                            type = "button"
                                            onClick = {()=>{}}>
                                                <h3 className="text_semibold white">
                                                    Let's Go Shopping 
                                                </h3>
                                            </NavLink>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
            
        </div>                        
    )
}
