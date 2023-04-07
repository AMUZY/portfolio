import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function WomensShoes (props){
    const name = "Women's Shoes"

    const subsub = [
        {name : "Heels" ,href : KongaDefault("heels")},
        {name : "Women's Sandals & Slippers",href : KongaDefault("women-sandals-and-slippers")},
        {name : "Shoes & Bags",href : KongaDefault("shoes-and-bags")},
        {name : "Wedges",href : KongaDefault("wedges")},
        {name : "Sport's Shoes",href : KongaDefault("sport-shoes")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}