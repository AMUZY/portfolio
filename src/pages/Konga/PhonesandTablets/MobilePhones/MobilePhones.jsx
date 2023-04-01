import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function MobilePhones (){
    const name = "Mobile Phones"

    const subsub = [
        {name : "Smart Phones",href : KongaDefault("smart-phones")},
        {name : "Feature Phones" ,href : KongaDefault("feature-phones")},
        
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}