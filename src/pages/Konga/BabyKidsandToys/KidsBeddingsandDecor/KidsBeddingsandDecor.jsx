import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function KidsBeddingsandDecor (props){
    const name = "Kid's Beddings and Decor"

    const subsub = [
        {name : "Bedding" ,href : KongaDefault("bedding")},
        {name : "Decor Accessories",href : KongaDefault("decor-accessories")},
        {name : "Kid Furniture",href : KongaDefault("kid-furniture")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}