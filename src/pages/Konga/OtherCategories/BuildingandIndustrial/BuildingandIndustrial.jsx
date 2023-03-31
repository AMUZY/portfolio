import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function BuildingandIndustrial (){
    const name = "Building and Industrial"

    const subsub = [
        {name : "Construction Materials" ,href : KongaDefault("construction-materials")},
        {name : "Plumbing Materials",href : KongaDefault("plumbing-materials")},
        {name : "Sewing Machines & Accessories",href : KongaDefault("sewingmachines-and-accessories")},
        {name : "Tools",href : KongaDefault("tools")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}