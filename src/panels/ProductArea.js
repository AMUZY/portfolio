import "../button.scss"
import "../font.scss"
import "../theme.scss"

import { NavLink } from "react-router-dom"
import {v4 as uuidv4} from "uuid"


export default function ProductArea (props){
    const subsub = props.subsub;

    return (
        <div className=" my-2 mx-4 xl:h-[13%] ">
            <div className="">
                {/* TITLE DIV */}
                <div className="w-full h-max">
                    <h2 className="price mb-2 lg:mb-0">
                        {props.name}
                    </h2>
                </div>
                {/* TABS AND SEARCH BAR DIV */}
                <div className="flex flex-row flex-wrap justify-between items-center w-full">
                    {/* TABS */}
                    <div className="flex flex-row flex-wrap flex-grow w-full md:w-1/2">
                        {
                            subsub.map((item)=>{
                                return (
                                    <NavLink 
                                    key = {uuidv4()}
                                    className= {({isActive}) => {
                                        if(isActive){
                                            return "h-max mr-2 my-1 text_semibold no-underline prod_btn theme_col white"
                                        }
                                        else {
                                            return "h-max hover:bg-gray-200 mr-2 my-1 text no-underline section_col prod_btn black"
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
                    {/* SEARCH DIV */}
                    <div className = "h-max flex-grow flex flex-row my-3 w-full lg:w-auto md:min-w-[30%] flex-grow-0 ">
                        {/* SEARCH BAR */}
                        <input className="text input flex-grow rounded-lg border-[1px] border-gray-300 mr-[5px] h-max px-4 py-2 overflow-hidden" placeholder="Search Products" />
                        {/* SEARCH BUTTON */}
                        <button className = "ml-[5px] search_btn theme_col">
                            <h2 className="text white">
                                Search
                            </h2>
                        </button>
                    </div>
                </div>
                {/* ALL PRODUCTS DIRECT YOU */}
                <div>
                    <h4 className="others grey">
                        All products direct you to Konga online shopping mall
                    </h4>
                </div>
            </div>
        
        </div>
    )
}