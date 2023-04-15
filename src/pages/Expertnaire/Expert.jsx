import "../../button.scss"
import "./Expert.scss"
import Navbar from "../../panels/Navbar"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { useState } from "react"

// STARS IMPORT
import one from "../../SVGs/1_star.svg";
import one_half from "../../SVGs/1_5_star.svg";
import two from "../../SVGs/2_star.svg";
import two_half from "../../SVGs/2_5_star.svg";
import three from "../../SVGs/3_star.svg";
import three_half from "../../SVGs/3_5_star.svg";
import four from "../../SVGs/4_star.svg";
import four_half from "../../SVGs/4_5_star.svg";
import five from "../../SVGs/5_star.svg";
import Products from "../../panels/Products"
import ExpNavbar from "../../panels/ExpNavbar"



// ARRAY TO STORE ALL PATHS
export var EXPPATHS = []; 

// CLASS THAT CONTAINS PROPERTIES OF ALL ITEM OBJECTS
class ExpItem {
    constructor(src,alt,title,subtitle,use,prodlink){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.subtitle = subtitle;
        this.use = use;
        this.prodlink = prodlink;
    }
};

export var EXPITEMS = [];

// ALL ITEMS BEGINS
  export const exp1 = new ExpItem(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/L/140825_1656434632.jpg" },
    ],
    "product",
    "Become a Millonaire in Two days",
    "The Dell Laptop Backpack in black is designed to hold laptops up to 15.6 inches and provide a safe, comfortable, and stylish way to transport your laptop and other essential items.",
 
    "It is simply a backpack designed to carry a 15.6\" laptop.",
    "https://www.konga.com/product/portable-laptop-bag-blue-4788971?k_id=AMUZY",
  )
  EXPITEMS.push(exp1);

  export const exp2 = new ExpItem(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/Z/138686_1647879497.jpg" },
    ],
    "product",
    "Jand within 2 hrs",
    "The Anti Theft Waterproof USB Laptop Backpack is a durable and secure backpack designed to keep your belongings safe while you're on-the-go. With its waterproof material and anti-theft design, this backpack is perfect for travel or everyday use. It features a USB charging port, multiple compartments for organization, and can fit laptops up to 15.6 inches.",
 
    "It is simply a backpack designed to carry a 15.6\" laptop. It has a waterproof and Antitheft design",
    "https://www.konga.com/product/anti-theft-waterproof-usb-laptop-backpack-5672159?k_id=AMUZY",
  )
  EXPITEMS.push(exp2);

// ALL ITEMS END

// 
// 
// 
// 
// 
// 
// 


export default function Expert (props) {
  let link = useLocation()
  EXPPATHS.push(link.pathname)
    // var link = useLocation();

    // PRODUCTS
    // MAX OF SIX IMAGES PER ITEM
    // THE HEIGHT OF ALL IMAGES ARE INHERITED FROM PARENT

    // EXPITEMS.forEach((item)=>{
    //     props.updateProds(ExpItem.title,ExpItem.src,ExpItem.subtitle,ExpItem.price,ExpItem.star,ExpItem.spec,ExpItem.prodlink);
    //   })

    return (
        <div className="relative w-full mainkonga flex flex-col">
          <ExpNavbar />
          <Outlet />
        </div>
    )
}