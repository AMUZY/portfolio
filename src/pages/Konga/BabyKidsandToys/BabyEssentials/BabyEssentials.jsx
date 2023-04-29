import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function BabyEssentials (props){
    const name = "Baby Essentials"

    const subsub = [
        {name : "Babyfood & Formula" ,href : KongaDefault("babyfood-and-formula")},
        {name : "Bibs & burpcloths",href : KongaDefault("bibs-and-burpcloths")},
        {name : "Bottle Feeding",href : KongaDefault("bottlefeeding")},
        {name : "Breast Feeding",href : KongaDefault("breast-feeding")},
        {name : "Feeding & Nursing",href : KongaDefault("feeding-and-nursing")},
        {name : "Pacifiers & Teethers",href : KongaDefault("pacifiers-and-teethers")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}