import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function ToysandActivities (){
    const name = "Toys and Activities"

    const subsub = [
        {name : "Activities" ,href : KongaDefault("activities")},
        {name : "Bicycles & RideOns",href : KongaDefault("bicycles-and-rideon")},
        {name : "Bouncers,Rockers & Swingers",href : KongaDefault("bouncers-rockers-and-swingers")},
        {name : "Educational Toys",href : KongaDefault("educational-toys")},
        {name : "Tablets for Kids",href : KongaDefault("tablets-for-kids")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}