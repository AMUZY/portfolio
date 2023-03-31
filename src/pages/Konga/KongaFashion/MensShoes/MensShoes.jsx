import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function MensShoes (){
    const name = "Men's Shoes"

    const subsub = [
        {name : "Casual Shoes" ,href : KongaDefault("casual-shoes")},
        {name : "Formal Shoes",href : KongaDefault("formal-shoes")},
        {name : "Shoe Care and Accessories",href : KongaDefault("shoecare-and-accessories")},
        {name : "Slippers and Sandals",href : KongaDefault("slippers-and-sandals")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}