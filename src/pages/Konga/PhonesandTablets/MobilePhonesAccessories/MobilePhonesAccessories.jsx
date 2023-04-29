import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function MobilePhonesAccessories (props){
    const name = "Mobile Phones Accessories"

    const subsub = [
        {name : "Batteries" ,href : KongaDefault("batteries")},
        {name : "Cables",href : KongaDefault("cables")},
        {name : "Cases and Covers" ,href : KongaDefault("cases-and-covers")},
        {name : "Chargers and Powerbanks",href : KongaDefault("chargers-and-powerbanks")},
        {name : "Earphones and Headsets" ,href : KongaDefault("earphones-and-headsets")},
        {name : "Screen Protectors",href : KongaDefault("screen-protectors")},
        {name : "Smartwatches and Bands" ,href : KongaDefault("smartwatches-and-bands")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}