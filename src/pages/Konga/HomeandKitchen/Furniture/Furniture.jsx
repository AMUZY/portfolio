import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Furniture (){
    const name = "Furniture"

    const subsub = [
        {name : "Bedroom Furniture" ,href : KongaDefault("bedroom-furniture")},
        {name : "Kitchen & Dining Furniture",href : KongaDefault("kitchens-and-dining-furniture")},
        {name : "Livingroom Furniture",href : KongaDefault("living-room-furniture")},
        {name : "Office Furniture",href : KongaDefault("office-furniture")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}