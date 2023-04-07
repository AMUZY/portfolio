import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function KitchenandDining (props){
    const name = "Kitchen and Dining"

    const subsub = [
        {name : "Cook and Bakeware" ,href : KongaDefault("cook-and-bakeware")},
        {name : "Dining",href : KongaDefault("dining")},
        {name : "Kitchen Utensils",href : KongaDefault("kitchen-utensils")},
    ]

    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}