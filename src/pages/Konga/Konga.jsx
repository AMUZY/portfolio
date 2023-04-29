import "../../button.scss"
import "./konga.scss"
import Navbar from "../../panels/Navbar"
import { Outlet } from "react-router-dom"
import KongaDefault from "./kongaDefault"
import { useLocation } from "react-router-dom"
import { useServeAllKongaItems } from "../../Custom_Functions/ServeAllKongaItems"
import { colRef } from "../../MyFirebase"
import {
  query, where, onSnapshot
} from "firebase/firestore"

import { useEffect, useState } from "react"

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


export var ITEMS = [];
// ARRAY TO STORE ALL PATHS
export var PATHS = []; 

// CLASS THAT CONTAINS PROPERTIES OF ALL ITEM OBJECTS
// class Item {
//     constructor(image,alt,title,subtitle,price,star,spec,prodlink){
//         this.image = image;
//         this.alt = alt;
//         this.title = title;
//         this.subtitle = subtitle;
//         this.price = price;
//         this.star = star;
//         this.spec = spec;
//         this.prodlink = prodlink;
//     }
// };


// ALL ITEMS BEGINS


  // export const item5 = new Item( 
  //     "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871629_1.jpg",
  //     "product",
  //     "Samsung USB 2.0 SATA HDD Case Enclosure - 2.5-Inch",
  //   "The Samsung USB 2.0 SATA HDD Case Enclosure is a portable storage solution for 2.5-inch hard disk drives. It allows users to transfer data and store files securely. The enclosure is easy to use and can be connected to a computer or laptop using a USB 2.0 interface. The durable design ensures that the hard drive is protected from scratches and other forms of damage. It is a convenient and reliable option for those who need to take their data on the go.",
  //    "3,500",
  //     "four",
  //     `Brand new high quality

  //     Plug and play, hot pluggable and hot swappable features make this device convenient and easy to use. LED lights 480Mbps Hot-swappable.
  //     Support hard drive up to 1.5TB
  //     Fully compatible with backwards compatible with USB 2.0 ,USB1.1.
  //     USB power supplied, no external power needed.
  //     Two color LED Indicator.
  //     for Windows 98/ME/2000/XP or for Mac OS compatible
  //     Cable Length: Approx. 33 inch
      
  //     Specification:
  //     Original box: yes
  //     Item size: Net weight: 130g
  //     Package weight: 198g
      
  //     Package Includes:
  //     1 X SATA Hard Drive HD Enclosure
  //     1 X USB cable
  //     1 X Carrying case bag
  //     `,
  //     "https://www.konga.com/product/samsung-usb-2-0-sata-hdd-case-enclosure-2-5-inch-2940295?k_id=AMUZY",
  // )
  // ITEMS.push(item5);


// ALL ITEMS END

// 
// 
// 
// 
// 
// 
// 
export var mainNav = []

export default function Konga(props) {
  let link = useLocation()
  PATHS.push(link.pathname)

  // console.log(ServeAllKongaItems())

  // var link = useLocation();
  mainNav =[
    {name : "Computers and Accessories" ,href : KongaDefault("computers-and-accessories")},
    {name : "Phones and Tablets",href : KongaDefault("phones-and-tablets") },
    {name : "Electronics" ,href : KongaDefault("electronics") },
    {name : "Konga Fashion" ,href : KongaDefault("konga-fashion")},
    {name : "Home and Kitchen",href : KongaDefault("home-and-kitchen") },
    {name : "Baby,Kids and Toys" ,href : KongaDefault("baby-kids-and-toys") },
    {name : "Other Categories" ,href : KongaDefault("other-categories") },
  ];
  // PRODUCTS
  // MAX OF SIX IMAGES PER ITEM
  // THE HEIGHT OF ALL IMAGES ARE INHERITED FROM PARENT
  
  // ITEMS.forEach((item)=>{
  //     props.updateProds(item.title,item.src,item.subtitle,item.price,item.star,item.spec,item.prodlink);
  //   })
  
  return (
    <Outlet />
  )
}