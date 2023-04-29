import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function SmallAppliances (props){
    const name = "Small Appliances"

    const subsub = [
        {name : "Blenders,Juicers & Mixers" ,href : KongaDefault("blenders-juicers-and-mixers")},
        {name : "Electric Kettles",href : KongaDefault("electric-kettles")},
        {name : "Hotplates & Burners",href : KongaDefault("hotplates-and-burners")},
        {name : "Irons & Steamers",href : KongaDefault("irons-and-steamers")},
        {name : "Microwaves",href : KongaDefault("microwaves")},
        {name : "Processors & Mincers",href : KongaDefault("processors-and-mincers")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}