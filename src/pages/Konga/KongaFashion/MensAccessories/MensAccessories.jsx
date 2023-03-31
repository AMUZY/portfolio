import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function MensAccessories (){
    const name = "Men's Accessories"

    const subsub = [
        {name : "Men's Bags" ,href : KongaDefault("men-bags")},
        {name : "Belts and Wallets",href : KongaDefault("belts-and-wallets")},
        {name : "Caps and Hats",href : KongaDefault("caps-and-hats")},
        {name : "Socks and Underwear",href : KongaDefault("socks-and-underwear")},
        {name : "Ties and Cufflinks",href : KongaDefault("ties-and-cufflinks")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}