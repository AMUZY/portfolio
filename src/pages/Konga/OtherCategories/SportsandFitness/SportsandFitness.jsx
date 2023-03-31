import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function SportsandFitness (){
    const name = "Sports & Fitness"

    const subsub = [
        {name : "Boxing" ,href : KongaDefault("boxing")},
        {name : "Fitness",href : KongaDefault("fitness")},
        {name : "Football",href : KongaDefault("football")},
        {name : "Outdoor & Indoor Games",href : KongaDefault("outdoor-and-indoorgames")},
        {name : "Sportswear",href : KongaDefault("sportswear")},
        {name : "Swimming",href : KongaDefault("swimming")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}