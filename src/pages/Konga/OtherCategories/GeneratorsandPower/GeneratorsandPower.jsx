import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function GeneratorsandPower (props){
    const name = "Generators and Power"

    const subsub = [
        {name : "General & Accessories" ,href : KongaDefault("generators-and-accessories")},
        {name : "Inverters",href : KongaDefault("inverters")},
        {name : "Solar & Alternatice Energy",href : KongaDefault("solar-and-alternative-energy")},
        {name : "UPS & Surge Protectors",href : KongaDefault("ups-and-surge-protectors")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}