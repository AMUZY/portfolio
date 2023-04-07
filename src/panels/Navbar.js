import "../button.scss"
import "../theme.scss"
import "../font.scss"
import "../navbar.scss"
import {v4 as uuidv4} from "uuid";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

//IMPORTED SVGs
import homeicon from "../SVGs/home_icon.svg"
import menu from "../SVGs/menu.svg"

// IMPORTED PICTURES
import venmobile from "../PICTURES/konga_link_desktop.jpg"
import ventablet from "../PICTURES/konga_tablet.jpg"
import vendesktop from "../PICTURES/konga_desktop.jpg"

export default function Navbar(props){
    const [btnshow , setBtnshow] = useState("hidden opacity-0");
    const [catshow, setCatshow] = useState("top-[-50%]");

    function OpenCat(){
        setBtnshow("block opacity-70");
        setCatshow("block top-0");
    }

    function CloseCat(){
        setBtnshow("hidden opacity-0");
        setCatshow("block top-[-50%]");
    }

    // w-[70%] sm:w-[70%] md:w-[80%] lg:w-[85%]

    const main_nav = props.mainNav;

    return (
        <>
            {/* MOBILE AND TABLET NAVBAR BUTTON PANE */}
            <div className="navbar w-auto flex flex-row items-center justify-start white_col z-[1] border-b-[1px] border-gray-300 xl:hidden">
             
                <div className="flex flex-row ">
                    {/* HOME ICON AND VENDOR LOGO IMAGE DIV */}
                        {/* HOME ICON */}
                        <Link
                        className = "flex flex-col items-center w-max h-max mx-4 my-auto"
                        to = "/">
                            <img className = "w-[20px] md:w-[25px] xl:w-[30px]" src = {homeicon} alt = "home icon" />
                            <h2 className="category">
                                Home
                            </h2>
                        </Link>
                        
                    {/* CATEGORIES BUTTON DIV */}
                    <button type = "button" className = "flex flex-col items-center w-max h-max mx-2 my-auto"
                        onClick={()=>{OpenCat()}}>
                            <img className = "w-[20px] md:w-[25px] xl:w-[30px]" src = {menu} alt = "menu button" />
                            <h2 className="category">
                                Categories
                            </h2>
                    </button>
                </div>
                   {/* VENDOR'S IMAGE */}
                   {/* <img className = "h-full w-[100px]" src = {venmobile} alt = "vendor"/> */}
            </div>


            {/* BLUR BOX */}
            <button type = "button" onClick={()=>{CloseCat()}} className={"z-[2] absolute top-0 right-0 left-0 bottom-0 black_col " + btnshow}></button>

            {/* SLIDING MOBILE NABAR DIV */}
            <div className={"absolute slidediv flex flex-row flex-wrap pb-3 left-0 right-0 white_col z-[3] h-auto items-center justify-center border-b-[1px] border-[grey] xl:hidden " + catshow}>
                {/* CATEGORY TITLE */}
                <div className="pt-2">
                    <h2 className="subtitle_semibold"> 
                        Categories
                    </h2>
                </div>
                {/* TABS DIV */}
                <div className="flex w-full py-2 flex-row flex-wrap justify-center mx-2">
                    {
                        main_nav.map((item)=>{
                            return (
                                <NavLink 
                                key = {uuidv4()}
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "text-center h-max mx-2 my-1 text_semibold no-underline cat_btn theme_col white"
                                    }
                                    else {
                                        return "text-center h-max mx-2 my-1 section_col text no-underline hover:bg-gray-200 cat_btn black"
                                    }
                                }}
                                to = {item.href}
                                >
                                        {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>

                {/* CLOSE BUTTON */}
                {/* <div className="w-max h-max">
                    <button className="w-[30px] md:w-[35px]" onClick={()=>{CloseCat()}}>
                        <img src = {closebtn} className="" alt = "specifications close button"/>
                    </button>
                </div> */}
            </div>
            

            {/* DESKTOP NABAR DIV */}
            <div className="hidden white_col z-[1] h-[6%] items-center border-b-[1px] border-[grey] xl:flex">
                {/* HOME ICON AND VENDOR LOGO IMAGE DIV */}
                <div className="h-full w-max px-2 flex items-center justify-center">
                    {/* HOME ICON */}
                    <Link
                    className="mx-2"
                    to = "/">
                        <img className = "w-[20px] md:w-[25px] xl:w-[30px]" src = {homeicon} alt = "home icon" />
                    </Link>
                        {/* <img className = "h-full" src = {venmobile} alt = "vendor"/> */}
                </div>
                {/* TABS DIV */}
                <div className="flex py-3 flex-row justify-between mx-2">
                    {
                        main_nav.map((item)=>{
                            return (
                                <NavLink 
                                key = {uuidv4()}
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "text-center h-max mx-2 my-1 text_semibold no-underline cat_btn theme_col white"
                                    }
                                    else {
                                        return "text-center h-max mx-2 my-1 section_col text no-underline hover:bg-gray-200 cat_btn black"
                                    }
                                }}
                                to = {item.href}
                                >
                                        {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            
           
        </>
    )
}