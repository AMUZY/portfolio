import "../button.scss"
import Navbar from "../panels/Navbar"
import SubCat from "../panels/SubCat"
import ProductArea from "../panels/ProductArea"
import Products from "../panels/Products"

//IMPRTED PICTURES
import product from "../PICTURES/product.jpg"
import product2 from "../PICTURES/product2.jpg"
import fav from "../PICTURES/fav.jpg"
import charles from "../PICTURES/charles.jfif"

// STARS IMPORT
import one from "../SVGs/1_star.svg";
import one_half from "../SVGs/1_5_star.svg";
import two from "../SVGs/2_star.svg";
import two_half from "../SVGs/2_5_star.svg";
import three from "../SVGs/3_star.svg";
import three_half from "../SVGs/3_5_star.svg";
import four from "../SVGs/4_star.svg";
import four_half from "../SVGs/4_5_star.svg";
import five from "../SVGs/5_star.svg";


import { useLocation } from "react-router-dom"

export default function Konga() {
    let linkmain = useLocation();
    let link = linkmain.pathname;
    

    const main_nav = [
        {name : "Health and Beauty" ,href : link + "/health-and-beauty"},
        {name : "Home and Office",href : link + "/home-and-office"},
        {name : "Phones and Tablets" ,href : link + "/phones-and-tablets"},
        {name : "Computing" ,href : link + "/computing"},
        {name : "Electronics" ,href : link + "/electronics"},
    ]

    const sub_cat = [
        {name : "Health and Beauty" ,href : link + "/health-and-beauty"},
        {name : "Home and Office",href : link + "/home-and-office"},
        {name : "Phones and Tablets" ,href : link + "/phones-and-tablets"},
        {name : "Computing" ,href : link + "/computing"},
        {name : "Electronics" ,href : link + "/electronics"},
    ]

    const subsub = [
        {name : "Health and Beauty" ,href : link + "/health-and-beauty"},
        {name : "Home and Office",href : link + "/home-and-office"},
        {name : "Phones and Tablets" ,href : link + "/phones-and-tablets"},
        {name : "Computing" ,href : link + "/computing"},
        {name : "Electronics" ,href : link + "/electronics"},
    ]

    // PRODUCTS
    // MAX OF SIX IMAGES PER ITEM
    // THE HEIGHT OF ALL IMAGES ARE INHERITED FROM PARENT
    const products = [
        {src : [{id : 0 , img : product2} ,{id : 1, img : product2}, {id : 2 , img : product}] , alt : "product" , 
            title : "ALIENWARE LAPTOP" , 
                subtitle : "Favour Hyacinth is a great girl. She's everything a woman is meant to be. She's smart, intelligent, and has high moral standards.", 
                    price : "PRICELESS", 
                        star : five , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product" },
        {src : [{id : 0 , img : product} ,{id : 1, img : product}, {id : 2 , img : product}] , alt : "product" , 
            title : "SOME GOOFY TEST PRODUCT" , 
                subtitle : "No need for description, if you don't have 150, just bring any amount, no time to play. I'm seriouts here", 
                    price : "150", 
                        star : one , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product" },      
        {src : [{id : 0 , img : product} ,{id : 1, img : product2}, {id : 2 , img : product}] , alt : "product" , 
            title : "Oraimo 27000mAh Massive Power Charging Bank Traveller 3 Byte" , 
                subtitle : "The Oraimo 27000mAh Massive Power Charging is a powerful and compact power bank that can charge multiple devices  simultaneously. It features fast charging ports, pass-through charging, and advanced safety features to keep your devices protected.  Perfect for travel, outdoor activities, or emergencies.", 
                    price : "10,000", 
                        star : four_half , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product" },    
        {src : [{id : 0 , img : product} ,{id : 1, img : product2}, {id : 2 , img : product}] , alt : "product" , 
            title : "Oraimo 27000mAh Massive Power Charging Bank Traveller 3 Byte" , 
                subtitle : "The Oraimo 27000mAh Massive Power Charging is a powerful and compact power bank that can charge multiple devices  simultaneously. It features fast charging ports, pass-through charging, and advanced safety features to keep your devices protected.  Perfect for travel, outdoor activities, or emergencies.", 
                    price : "10,000", 
                        star : four_half , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product" },          
    ]

    return (
        <div className="relative overflow-hidden w-full h-full flex flex-col">
            <Navbar main_nav = {main_nav} />

            <div className="flex flex-col h-[94%] w-full xl:flex-row xl:h-[95%]">
                <SubCat sub_cat = {sub_cat} />
                <ProductArea subsub = {subsub} products = {products} />
            </div>
        </div>
    )
}