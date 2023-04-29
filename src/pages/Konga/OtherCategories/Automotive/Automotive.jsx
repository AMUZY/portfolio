import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Automotive (props){
    const name = "Automotive"

    const subsub = [
        {name : "Autocare & Maintenance" ,href : KongaDefault("autocare-and-maintenance")},
        {name : "Automotive Tools & Accessories",href : KongaDefault("automotivetools-and-accessories")},
        {name : "Safety & Security",href : KongaDefault("safety-and-security")},
        {name : "Tyres & Batteries",href : KongaDefault("tyres-and-batteries")},
    ]

    return (
        <>
            <ProductArea  subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}