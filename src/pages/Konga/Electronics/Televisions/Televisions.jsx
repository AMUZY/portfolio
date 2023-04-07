import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Televisions (props){
    const name = "Televisions"

    const subsub = [
        {name : "Curved TVs" ,href : KongaDefault("curved-tvs")},
        {name : "LED TVs",href : KongaDefault("led-tvs")},
        {name : "OLED TVs",href : KongaDefault("oled-tvs")},
        {name : "PLASMA TVs",href : KongaDefault("plasma-tvs")},
        {name : "Smart TVs",href : KongaDefault("smart-tvs")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}