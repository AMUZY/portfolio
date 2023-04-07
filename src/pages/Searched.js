import SearchCard from "../components/SearchCard";
import { v4 as uuidv4 } from "uuid";
import { allprods } from "../App";
import { SEARCHED } from "../panels/ProductArea";
import { useState } from "react";
import { Link } from "react-router-dom";
import larrow from "../SVGs/l_arrow.svg";

export default function Searched() {
    var state;
    let count = [1];
    allprods.forEach((item) => {
        if (SEARCHED.title === item.title) {
            const newstuff = {
            title: item.title,
            subtitle: item.subtitle,
            src: item.src,
            price: item.price,
            star: item.star,
            spec: item.spec,
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
                                    <Link className="mb-4 flex flex-row items-center justify-center" to = "/konga/computers-and-accessories/computing/bags-cases-covers" > <img className = "mx-2" src= {larrow}/> Return </Link>
                                    <SearchCard
                                        title={state.title}
                                        subtitle={state.subtitle}
                                        src={state.src}
                                        price = {state.price}
                                        star = {state.star}
                                        spec = {state.spec}
                                        prodlink = {state.prodlink}
                                    />
                                </div>

                            )
                        }
                        else{
                            return (
                                <Link key = {uuidv4()} className="mb-4 flex flex-row items-center justify-center" to = "/konga/computers-and-accessories/computing/bags-cases-covers" > <img className = "mx-2" src= {larrow}/> Return </Link>
                            )
                        }
                    })
                }
            </div>
      );
}
