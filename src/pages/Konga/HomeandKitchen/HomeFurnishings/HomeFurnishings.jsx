import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function HomeFurnishings (props){
    const name = "Home Furnishings"

    const subsub = [
        {name : "Bed & Bathroom" ,href : KongaDefault("bed-and-bathroom-furnishings")},
        {name : "Curtain & Blinds",href : KongaDefault("curtain-and-blinds")},
        {name : "Decor",href : KongaDefault("decor")},
        {name : "Light Fixtures",href : KongaDefault("light-fixtures")},
        {name : "Rings & Carpets",href : KongaDefault("rings-and-carpets")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}