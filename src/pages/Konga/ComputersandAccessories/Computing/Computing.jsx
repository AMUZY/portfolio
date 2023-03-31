import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Computing (){
    const name = "Computing"

    const subsub = [
        {name : "Bags,cases,covers" ,href : KongaDefault("bags-cases-covers")},
        {name : "Computer Peripherals",href : KongaDefault("computer-peripherals")},
        {name : "Laptop/desktop accessories" ,href : KongaDefault("laptop-and-desktop-accessories")},
        {name : "Storage devices" ,href : KongaDefault("storage-devices")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}