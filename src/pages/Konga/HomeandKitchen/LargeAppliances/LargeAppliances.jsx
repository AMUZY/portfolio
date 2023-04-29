import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function LargeAppliances (props){
    const name = "Large Appliances"

    const subsub = [
        {name : "Air Conditioners & Coolers" ,href : KongaDefault("airconditioners-and-coolers")},
        {name : "Cookers & Ovens",href : KongaDefault("cookers-and-ovens")},
        {name : "Fans",href : KongaDefault("fans")},
        {name : "Freezers",href : KongaDefault("freezers")},
        {name : "Refrigerators",href : KongaDefault("refrigerators")},
        {name : "Vacuum Cleaners",href : KongaDefault("vacuum-cleaners")},
        {name : "Water dispensers",href : KongaDefault("water-dispensers")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}