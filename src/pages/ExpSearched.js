import SearchCard from "../components/SearchCard";
import { v4 as uuidv4 } from "uuid";
import { allprods } from "../App";
import { SEARCHED } from "../panels/ProductArea";
import { useState } from "react";
import { Link } from "react-router-dom";
import bluearrow from "../SVGs/r_b_arrow.svg";
import { PATHS } from "./Konga/Konga";
import { useParams } from "react-router-dom";
import { EXPITEMS } from "./Expertnaire/Expert";
import ExpSearchCard from "../components/ExpSearchCard";


export default function ExpSearched() {
    const { searched } = useParams();
    

    var state;
    let count = [1];
    EXPITEMS.forEach((item) => {
        if (searched === item.title) {
            const newstuff = {
            title: item.title,
            subtitle: item.subtitle,
            src: item.src,
            use: item.use,
            prodlink : item.prodlink,
            };
            state = newstuff;
        }
    });
      return (
            <div className="w-full h-full p-8">
                {count.map(()=>{
                        if(state){
                            return (
                                <div key = {uuidv4()}>
                                    <Link className="mb-4 specs flex flex-row items-center justify-center" to = "/expertnaire/exp-products" > <img className = "rotate-180 mx-2" src= {bluearrow}/> Return to view more </Link>
                                    <ExpSearchCard
                                        title={state.title}
                                        subtitle={state.subtitle}
                                        src={state.src}
                                        use = {state.use}
                                        prodlink = {state.prodlink}
                                    />
                                </div>

                            )
                        }
                        else{
                            return (
                                <Link key = {uuidv4()} className="mb-4 specs flex flex-row items-center justify-center" to = "/expertnaire/exp-products" > <img className = "rotate-180 mx-2" src= {bluearrow}/> Return to view more </Link>
                            )
                        }
                    })
                }
            </div>
      );
}
