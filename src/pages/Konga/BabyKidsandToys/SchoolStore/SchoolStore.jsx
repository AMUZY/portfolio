import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function SchoolStore (){
    const name = "School Store"

    const subsub = [
        {name : "Bags & Bagpacks" ,href : KongaDefault("bags-and-bagpacks")},
        {name : "Lunchboxes & Waterbottles",href : KongaDefault("lunchboxes-and-waterbottles")},
        {name : "School Shoes",href : KongaDefault("school-shoes")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}