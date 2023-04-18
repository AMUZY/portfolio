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
        { id: 0, img: "https://greatplr.com/chatgpt/tray.png" },
    ],
    "product",
    // TITLE
    "ChatGPT for Internet Marketers (PLR) information",
    // SUBTITLE
    `Dear Entrepreneur,

    AI is taking the world by storm, and everyone is clamoring to get a piece of it.
    
    It was recently announced that ChatGPT was the fastest app in history to reach 100 Million users. It took Instagram over 2 years, and TikTok 9 months to reach that milestone.
    
    The reason it is growing so rapidly, is because entrepreneurs and businesses around the world want to harness this technology to get more done and make more money... while doing less work! Sounds great, right?` ,
    // DESCRIPTION
    `We've created a masterclass teaching internet marketers how to use ChatGPT to increase their productivity and make more money online. Here are just SOME of the types of small businesses and entrepreneurs who can benefit from ChatGPT, and who are ready to buy this course from you:

    Home-based businesses, such as online stores, freelance writing or graphic design, or pet grooming.
    Retail businesses, such as a boutique clothing store, a gift shop, or a specialty food store.
    Service-based businesses, such as a cleaning service, a lawn care business, or a tutoring service.
    Food-related businesses, such as a food truck, a bakery, or a catering service.
    Health and wellness businesses, such as a yoga studio, a massage therapy business, or a personal training business.
    Technology businesses, such as software development or web design.
    Professional services, such as accounting or legal services.
    Entertainment businesses, such as a music or art venue, or a game arcade.
    Tourism-related businesses, such as a tour guide service, a bed and breakfast, or a vacation rental business.
    Construction and home improvement businesses, such as a home renovation or handyman service.`,
    // PRODUCT LINK
    "https://jvz3.com/c/2801613/392510/",
  )
  EXPITEMS.push(exp1);

  export const exp2 = new ExpItem(
    [
        { id: 0, img: "https://shorturl.at/CDSUV" },
    ],
    "product",
    // TITLE
    "Done-For-You PLR Installation Service (any plr oto) information",
    // SUBTITLE
    `DONE-FOR-YOU PLR INSTALLATION SERVICE:
    LET US Install Your Entire PLR Package For You So You Can Start Generating Subscribers And Sales Quicker!` ,
    // DESCRIPTION
    `Here is what the Done-For-You PLR Installation Service covers:

    Fully installed for you! Just provide a few details.
    
    Sales page customized with your order button. Start generating sales!
    
    Opt-in page done for you so you can build your list!
    
    Installation of download page so your customers can download the product right away!
    
    Everything uploaded to our lightning fast web host!
    
    You will have your product up and running in 1-2 working days!
    
    Free custom subdomain included OR use your own domain.
    
    Free hosting included for your PLR product.`,
    // PRODUCT LINK
    "https://jvz6.com/c/2801613/383029/",
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