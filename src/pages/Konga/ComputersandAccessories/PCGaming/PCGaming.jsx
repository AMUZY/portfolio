import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function PCGaming (props){
    const name = "PC Gaming"

    const subsub = [
        {name : "PC Games" ,href : KongaDefault("pcgames")},
        {name : "PC Gaming Accessories",href : KongaDefault("pcgaming-accessories")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}