import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Watches (props){
    const name = "Watches"

    const subsub = [
        {name : "Men's Watches" ,href : KongaDefault("menswatches")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}