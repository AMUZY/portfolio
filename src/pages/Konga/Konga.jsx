import "../../button.scss"
import "./konga.scss"
import Navbar from "../../panels/Navbar"
import SubCat from "../../panels/SubCat"
import ProductArea from "../../panels/ProductArea"
import Products from "../../panels/Products"
import { Outlet } from "react-router-dom"
import KongaDefault from "./kongaDefault"

import { useLocation} from "react-router-dom";


export default function Konga() {
    
    const mainNav =[
        {name : "Computers and Accessories" ,href : KongaDefault("computers-and-accessories")},
        {name : "Phones and Tablets",href : KongaDefault("phones-and-tablets") },
        {name : "Electronics" ,href : KongaDefault("electronics") },
        {name : "Konga Fashion" ,href : KongaDefault("konga-fashion")},
        {name : "Home and Kitchen",href : KongaDefault("home-and-kitchen") },
        {name : "Baby,Kids and Toys" ,href : KongaDefault("baby-kids-and-toys") },
        {name : "Other Categories" ,href : KongaDefault("other-categories") },
    ];

    
    var link = useLocation();

    // PRODUCTS
    // MAX OF SIX IMAGES PER ITEM
    // THE HEIGHT OF ALL IMAGES ARE INHERITED FROM PARENT
    

    return (
        <div className="relative w-full mainkonga flex flex-col">
            <Navbar mainNav = {mainNav} />
            
            <div className="flex newdude flex-col w-full xl:flex-row">
                <Outlet />
            </div>
        </div>
    )
}