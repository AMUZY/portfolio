import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function WomensWear (){
    const name = "Women's Wear"

    const subsub = [
        {name : "Dresses" ,href : KongaDefault("dresses")},
        {name : "Lingerie and Sleepwear",href : KongaDefault("lingerie-and-sleepwear")},
        {name : "Skirts",href : KongaDefault("skirts")},
        {name : "Tops",href : KongaDefault("tops")},
        {name : "Trousers",href : KongaDefault("women-trousers")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}