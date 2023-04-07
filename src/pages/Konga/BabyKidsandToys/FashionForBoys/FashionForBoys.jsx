import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function FashionForBoys  (props){
    const name = "Fashion For Boys"

    const subsub = [
        {name : "Bodysuits & Playsuits" ,href : KongaDefault("boy-body-suits-and-playsuits")},
        {name : "Denims & Trousers",href : KongaDefault("denim-and-trousers")},
        {name : "Sets",href : KongaDefault("boy-sets")},
        {name : "Shirts",href : KongaDefault("boy-shirts")},
        {name : "Boy Shoes",href : KongaDefault("boy-shoes")},
        {name : "Sleepwear",href : KongaDefault("boy-sleepwear")},
        {name : "Underwear & Socks",href : KongaDefault("boy-underwear-and-socks")},
        {name : "Watches",href : KongaDefault("boy-watches")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}