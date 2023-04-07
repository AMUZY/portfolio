import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function FashionForGirls (props){
    const name = "Fashion For Girls"

    const subsub = [
        {name : "Bodysuits & Playsuits" ,href : KongaDefault("girl-body-suits-and-playsuits")},
        {name : "Sets",href : KongaDefault("girl-sets")},
        {name : "Girl Shoes",href : KongaDefault("girl-shoes")},
        {name : "Sleepwear",href : KongaDefault("girl-sleepwear")},
        {name : "Underwear & Socks",href : KongaDefault("girl-underwear-and-socks")},
        {name : "Watches",href : KongaDefault("girl-watches")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}