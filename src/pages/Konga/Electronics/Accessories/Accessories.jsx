import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Accessories (){
    const name = "Accessories"

    const subsub = [
        {name : "Gaming Accessories" ,href : KongaDefault("gaming-accessories")},
        {name : "HeadPhones",href : KongaDefault("headphones")},
        {name : "Other Accessories" ,href : KongaDefault("other-accessories")},
        {name : "Television Accessories",href : KongaDefault("television-accessories")},
        {name : "TV Audio",href : KongaDefault("tv-audio")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}