import "../button.scss"
import "../theme.scss"
import "../font.scss"
import "../expnavbar.scss"
import {v4 as uuidv4} from "uuid";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

//IMPORTED SVGs
import homeicon from "../SVGs/home_icon.svg"
import menu from "../SVGs/menu.svg"
import { EXPITEMS } from "../pages/Expertnaire/Expert";

// IMPORTED PICTURES
import venmobile from "../PICTURES/konga_link_desktop.jpg"
import ventablet from "../PICTURES/konga_tablet.jpg"
import vendesktop from "../PICTURES/konga_desktop.jpg"

export default function ExpNavbar(props){
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
            {/* NAVBAR */}
            <div className="navbar w-auto flex flex-row items-center justify-start white_col z-[1] border-b-[1px] border-gray-300">
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
                </div>
                {/* ALL ITEMS SHOW */}
                <div className="overflow-hidden flex items-center h-full flex-row w-[90%]">
                    <div className="h-full w-max flex flex-row flex-nowrap board">
                        {
                            EXPITEMS.map((item)=>{
                                return (
                                    <h2 key = {uuidv4()} className="text_semibold flex items-center h-full w-max mx-2"> {item.title} </h2>
                                )
                            })
                        }
                    </div>
                    <div className="h-full w-max flex flex-row flex-nowrap board xl:hidden">
                        {
                            EXPITEMS.map((item)=>{
                                return (
                                    <h2 key = {uuidv4()} className="text_semibold flex items-center h-full w-max mx-2"> {item.title} </h2>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            

          
            
           
        </>
    )
}