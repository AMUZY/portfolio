import "../button.scss"
import "../font.scss"
import "../theme.scss"

import x from "../SVGs/circle_x_btn.svg"

import { NavLink, useNavigate } from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import { useState } from "react"
import { useMemo } from "react"
// import { useParams } from "react-router-dom"

export var SEARCHED = {
    title : "",
}



export default function ProductArea (props){
    const [prod,setProd] = useState(props.allprods);
    const subsub = props.subsub;
    const [search,setSearch] = useState("hidden")
    const [check,setCheck] = useState("");
    const [filtereditems,setFiltereditems] = useState([]);
    const [xbtn,setXbtn] = useState("hidden");


    // NEW ARRAY THAT ELEMINATES DUPLICATES IN THE SHOWSEACH ARRAY
    
    let finalsearch = [...new Set(filtereditems.map((item)=>{return item.title }))];
    console.log(finalsearch);

    // FUNCTION THAT SETS SEARCH TO HIDDEN ON CALL OF THE EXPORT FUNCTION CLOSESEARCH ABOVE

    let navigate = useNavigate();

    const handleChange = (e) => {
        // 👇 Get input value from "event"
        e.preventDefault();
        setCheck(e.target.value);
        setSearch("block");
        if(e.target.value === "")
        {
            setSearch("hidden")
        }
        if(check.length >= 0 && e.target.value !== ""){
            setXbtn("inline-block")
        }
        else{
            setXbtn("hidden")
        }
        setFiltereditems(prod.filter((item)=>{
            return(
                item.title.toLowerCase().includes(check.toLowerCase())
            )
        }))
    
      };

      const gosearch = (()=>{
        finalsearch.map((item)=>{
            if(item === check){
                SEARCHED.title = check;
                navigate("/konga/search");
            }
        })
      })
    

    return (
        <div onClick = {()=>{setSearch("hidden")}} className=" my-2 mx-4 xl:h-[13%] ">
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
                    {/* SEARCH DIV FORM*/}
                        <div className = "relative h-max flex-grow flex flex-row my-3 w-full xl:w-auto ">

                            {/* SEARCH BAR */}
                            <div className = "relative flex-grow mr-[5px] h-max ">
                                <input type = "text"
                                    value={check}
                                    onKeyUp={(e)=>{
                                        if(e.code === "Enter"){
                                            gosearch(); 
                                        }
                                    }}  
                                    onBlur={()=>{
                                        // setFiltereditems([]);
                                        // console.log("not equal to");
                                        // setCheck("");    
                                    }}
                                    onChange={handleChange}
                                    className="w-full h-full input rounded-lg border-[1px] border-gray-300 px-4 py-2 text overflow-hidden" placeholder="Search All Categories" />

                                {/* BUTTON TO CLEAR SEARCH BAR */}
                                <button className = {"absolute h-[98%] top-0 right-1 bottom-0 nohightlight " + xbtn} onClick={()=>{setCheck("");setXbtn("hidden")}}><img className = "bg-white w-[25px]" src = {x} alt = "delete button"/></button>
                            </div>

                            {/* DIV WHERE ITEMS SHOW UP */}
                            <div className={"absolute z-[1] overflow-hidden white_col rounded-lg p-2 flex flex-col flex-nowrap left-0 translate-y-[100%] right-0 bottom-[-10%] max-h-[400px] " + search}> 
                                {
                                    finalsearch.map((item)=>{
                                        return (
                                            <button type = "button" key = {uuidv4()} onClick = {()=>{
                                                setCheck(item);
                                                setSearch("hidden")
                                            }} className="flex flex-row text grey mx-1 my-1"> {item} </button>
                                        )
                                    })
                                }
                            </div>

                            {/* SEARCH BUTTON */}
                            <button type = "submit" onClick = {()=>{
                                if(check.length > 0){
                                    gosearch(); 
                                }
                                }} className = "ml-[5px] search_btn theme_col">
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