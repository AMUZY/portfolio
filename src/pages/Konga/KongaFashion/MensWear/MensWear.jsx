import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function MensWear (props){
    const name = "Men's Wear"

    const subsub = [
        {name : "Jeans" ,href : KongaDefault("jeans")},
        {name : "Jerseys",href : KongaDefault("jerseys")},
        {name : "Polos",href : KongaDefault("polos")},
        {name : "Men's Shirts",href : KongaDefault("menshirts")},
        {name : "T-Shirts",href : KongaDefault("tshirts")},
        {name : "Trousers & Shorts",href : KongaDefault("trousers-and-shorts")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}