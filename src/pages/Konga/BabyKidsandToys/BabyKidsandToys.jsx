import { Outlet } from "react-router-dom"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"

export default function BabyKidsandToys (props) {

    const sub_cat = [
        {name : "Baby Essentials" ,href : KongaDefault("baby-essentials")},
        {name : "Diapering and DailyCare",href :KongaDefault("diapering-and-dailycare")},
        {name : "Fashion For Boys" ,href :KongaDefault("fashion-for-boys")},
        {name : "Fashion For Girls",href :KongaDefault("fashion-for-girls")},
        {name : "KidsBeddings and Decor" ,href :KongaDefault("kidsbeddings-and-decor")},
        {name : "School Store" ,href :KongaDefault("school-store")},
        {name : "Toys and Activities" ,href :KongaDefault("toys-and-activities")},
    ]

    return (
        <>
            <SubCat sub_cat = {sub_cat}/>
            <div className="w-full h-full flex flex-col">
                <Outlet />
            </div>
        </>
    )
}