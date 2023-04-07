import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function WomensAccessories (props){
    const name = "Women's Accessories"

    const subsub = [
        {name : "Women's Bags" ,href : KongaDefault("women-bags")},
        {name : "Women's Belts",href : KongaDefault("women-belts")},
        {name : "Purses and Clutches",href : KongaDefault("purses-and-clutches")},
        {name : "Wallets",href : KongaDefault("wallets")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}