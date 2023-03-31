import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function BeautyandPersonalCare (){
    const name = "Beauty and Personal Care"

    const subsub = [
        {name : "Contraceptives & Lubricants" ,href : KongaDefault("contraceptives-and-lubricants")},
        {name : "Fragrances",href : KongaDefault("fragrances")},
        {name : "Hair Centre",href : KongaDefault("haircentre")},
        {name : "Health",href : KongaDefault("health")},
        {name : "Make Up",href : KongaDefault("makeup")},
        {name : "Sexual Wellness",href : KongaDefault("sexual-wellness")},
        {name : "Skin Care",href : KongaDefault("skincare")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}