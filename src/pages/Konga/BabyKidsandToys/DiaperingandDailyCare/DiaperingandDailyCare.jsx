import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function DiaperingandDailyCare (){
    const name = "Diapering and DailyCare"

    const subsub = [
        {name : "Bathtime Essentials" ,href : KongaDefault("bathtime-essentials")},
        {name : "Daily Care",href : KongaDefault("dailycare")},
        {name : "DiaperBags & Changing mats",href : KongaDefault("diaperbags-and-changingmats")},
        {name : "Diapers & Babywipes",href : KongaDefault("diapers-and-babywipes")},
        {name : "Potty Training",href : KongaDefault("potty-training")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}