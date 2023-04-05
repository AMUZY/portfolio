import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"
// import { useOutletContext } from "react-router-dom"

export default function Computing (props){

    const name = "Computing"

    const subsub = [
        {name : "Bags,cases,covers" ,href : KongaDefault("bags-cases-covers")},
        {name : "Computer Peripherals",href : KongaDefault("computer-peripherals")},
        {name : "Laptop/desktop accessories" ,href : KongaDefault("laptop-and-desktop-accessories")},
        {name : "Storage devices" ,href : KongaDefault("storage-devices")},
    ]


    return (
        <>
            <ProductArea allprods = {props.allprods} subsub = {subsub} name = {name}/>
            <Outlet  />
        </>
    )
}