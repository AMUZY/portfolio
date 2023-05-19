import "../input.css"
import "../font.scss"
import "../theme.scss"
import "../nav.scss"
import {v4 as uuidv4 } from "uuid"
import ServeLink from "../functions/ServeLink"

// BLACK ICONS
import fb from "../SVGs/fb_black.svg"
import wh from "../SVGs/whatsapp_black.svg"
import tw from "../SVGs/twitter_black.svg"
import ig from "../SVGs/ig_black.svg"
import mail from "../SVGs/mail_black.svg"
import lkdn from "../SVGs/linkedin_black.svg"
import github from "../SVGs/github_black.svg"
import menu_icon from "../SVGs/menu_icon.svg"
// WHITE ICONS
import fb_wh from "../SVGs/fb_white.svg"
import wh_wh from "../SVGs/whatsapp_white.svg"
import tw_wh from "../SVGs/twitter_white.svg"
import ig_wh from "../SVGs/ig_white.svg"
import mail_wh from "../SVGs/mail_white.svg"
import lkdn_wh from "../SVGs/linkedin_white.svg"
import github_wh from "../SVGs/github_white.svg"

import { NavLink } from "react-router-dom"
import { useState } from "react"

let fb_link = "";
let wh_link = "";
let tw_link = "";
let ig_link = "";
let mail_link = "";
let lkdn_link = "";
let github_link = "";


export default function Nav () {
    let iconstyle = "m-1 0.02rem"
    let mob_iconstyle = "my-3 0.02rem"

    const [blur,setBlur] = useState("hidden");
    const [slide,setSlide] = useState("top-0 bottom-0 right-[-50%]");
    const [count,setCount] = useState(true);
    const [menu,setMenu] = useState("menu")

    const nav = [
        {name : "About", href : ServeLink("about")},
        {name : "Tech Skills", href : ServeLink("tech")},
        {name : "Other Skills", href : ServeLink("other")},
        {name : "Hobbies", href : ServeLink("hobbies")}
    ]

    function Show_or_hide(){
        if(count === true){
            setBlur("block");
            setSlide("top-0 bottom-0 right-[0]")
            setMenu(" menu rotate-[135deg]")
            setCount(false);
        }
        else {
            setBlur("hidden");
            setSlide("top-0 bottom-0 right-[-50%]")
            setMenu(" menu rotate-[0deg]")
            setCount(true);
        }
    }

    return (
        <div className="lg:pt-20 lg:pb-8 lg:pl-2 lg:pl-5 h-full flex flex-col justify-between">
            {/* MOBILE NAVBAR */}
            <div className="px-5 z-[3] py-1 w-full flex flex-row items-center justify-between lg:hidden">
                {/* CHRISTIAN */}
                <h1 className="white name_title"> Christian </h1>
                {/* MENU ICON */}
                <button onClick={()=>{
                    Show_or_hide();
                }}>
                    <img src = {menu_icon} className={iconstyle + menu} alt = "menu icon" />
                </button>
            </div>
            {/* TABLET/DESKTOP */}
            {/* NAME TITLE AND NAV */}
            <div className = "hidden flex flex-col justify-between lg:flex">
                {/* NAME */}
                <div className="flex flex-col mb-5 pr-1">
                    <h1 className="name_title">
                        Amu
                    </h1>
                    <h1 className="name_title">
                        Christian
                    </h1>
                    <h1 className="name_title">
                        Nnamdi
                    </h1>
                </div>
                {/* NAVLINKS */}
                <div className="flex flex-col">
                    {
                        nav.map((item)=>{
                            return (
                                <NavLink key = {uuidv4()} 
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "px-5 py-2 my-2 theme_col white text_semibold rounded-l-full"
                                    }
                                    else {
                                        return "px-5 py-2 my-2 white_col black text rounded-l-full hover:bg-gray-400"
                                    }
                                }}
                                 to = {item.href}>
                                    {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            {/* LINKS */}
            <div className = "hidden linkbox flex-row flex-wrap justify-center pr-[20px] lg:flex">
                <a href={fb_link}><img src = {fb} className={iconstyle} alt = "facebook icon" /></a>
                <a href={wh_link}><img src = {wh} className={iconstyle} alt = "whatsapp icon" /></a>
                <a href={tw_link}><img src = {tw} className={iconstyle} alt = "twitter icon" /></a>
                <a href={ig_link}><img src = {ig} className={iconstyle} alt = "instagram icon"/></a>
                <a href={lkdn_link}><img src = {lkdn} className={iconstyle} alt = "linkedin icon"/></a>
                <a href={mail_link}><img src = {mail} className={iconstyle} alt = "gmail icon"/></a>
                <a href={github_link}><img src = {github} className={iconstyle} alt = "github icon"/></a>
            </div>

            {/* BLUR BOX */}
            <button onClick={()=>{
                Show_or_hide();
            }}
            className={"absolute z-[2] top-0 left-0 right-0 bottom-0 theme_col opacity-80 " + blur}> </button>

            {/* MOBILE SLIDING NAV */}
            <div className={"slider " + slide}>
                {/* NAVLINKS */}
                <div className="flex pt-6 px-4 flex-col">
                    {
                        nav.map((item)=>{
                            return (
                                <NavLink key = {uuidv4()}
                                onClick={()=>{
                                    Show_or_hide();
                                }} 
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "px-5 py-2 my-2 white_col black text_semibold text-center rounded-tl-full rounded-br-full"
                                    }
                                    else {
                                        return "px-5 py-2 my-2 white text text-center rounded-tl-full rounded-br-full hover:bg-gray-400"
                                    }
                                }}
                                 to = {item.href}>
                                    {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>
                 {/* LINKS */}
                <div className = "py-2 flex flex-col justify-evenly items-center">
                    <a href={fb_link}><img src = {fb_wh} className={mob_iconstyle} alt = "facebook icon"/></a>
                    <a href={wh_link}><img src = {wh_wh} className={mob_iconstyle} alt = "whatsapp icon"/></a>
                    <a href={tw_link}><img src = {tw_wh} className={mob_iconstyle} alt = "twitter icon"/></a>
                    <a href={ig_link}><img src = {ig_wh} className={mob_iconstyle} alt = "instagram icon"/></a>
                    <a href={lkdn_link}><img src = {lkdn_wh} className={mob_iconstyle} alt = "linkedin icon"/></a>
                    <a href={mail_link}><img src = {mail_wh} className={mob_iconstyle} alt = "gmail icon"/></a>
                    <a href={github_link}><img src = {github_wh} className={mob_iconstyle} alt = "github icon"/></a>
                </div>
            </div>
        </div>
    )
}