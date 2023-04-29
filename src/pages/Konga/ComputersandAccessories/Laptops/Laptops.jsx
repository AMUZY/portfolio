import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Laptops (props){
    const name = "Laptops"

    const subsub = [
        {name : "Hybrid PCs" ,href : KongaDefault("hybrid-pcs")},
        {name : "Macbooks",href : KongaDefault("macbooks")},
        {name : "Mini laptops & Netbooks" ,href : KongaDefault("minilaptops-and-netbooks")},
        {name : "Notebooks" ,href : KongaDefault("notebooks")},
        {name : "Ultrabooks" ,href : KongaDefault("ultrabooks")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}