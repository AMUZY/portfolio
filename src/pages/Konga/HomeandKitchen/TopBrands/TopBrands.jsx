import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function TopBrands (props){
    const name = "Top Brands"

    const subsub = [
        {name : "Hisense" ,href : KongaDefault("hisense")},
        {name : "LG",href : KongaDefault("lg")},
        {name : "Polystar",href : KongaDefault("polystar")},
        {name : "Samsung",href : KongaDefault("samsung")},
        {name : "Scanfrost",href : KongaDefault("scanfrost")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}