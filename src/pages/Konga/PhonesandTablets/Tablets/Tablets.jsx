import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Tablets (props){
    const name = "Tablets"

    const subsub = [
        {name : "Android" ,href : KongaDefault("android")},
        {name : "IOS",href : KongaDefault("ios")},
        {name : "Other OS" ,href : KongaDefault("other-os")},
        {name : "Windows",href : KongaDefault("windows")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}