import Products from "../../../../panels/Products"

//IMPRTED PICTURES
import product from "../../../../PICTURES/product.jpg"
import product2 from "../../../../PICTURES/product2.jpg"

// STARS IMPORT
import one from "../../../../SVGs/1_star.svg";
import one_half from "../../../../SVGs/1_5_star.svg";
import two from "../../../../SVGs/2_star.svg";
import two_half from "../../../../SVGs/2_5_star.svg";
import three from "../../../../SVGs/3_star.svg";
import three_half from "../../../../SVGs/3_5_star.svg";
import four from "../../../../SVGs/4_star.svg";
import four_half from "../../../../SVGs/4_5_star.svg";
import five from "../../../../SVGs/5_star.svg";

export default function PCGames (){

    const products = [
        {src : [{id : 0 , img : product} ,{id : 1, img : product}] , alt : "product" , 
            title : "SOME GOOFY TEST PRODUCT" , 
                subtitle : "No need for description, if you don't have 150, just bring any amount, no time to play. I'm seriouts here", 
                    price : "150", 
                        star : one , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product",
                                    prodlink : "link-to-item-in-website", },      
        {src : [{id : 0 , img : product} ,{id : 1, img : product2}] , alt : "product" , 
            title : "Oraimo 27000mAh Massive Power Charging Bank Traveller 3 Byte" , 
                subtitle : "The Oraimo 27000mAh Massive Power Charging is a powerful and compact power bank that can charge multiple devices  simultaneously. It features fast charging ports, pass-through charging, and advanced safety features to keep your devices protected.  Perfect for travel, outdoor activities, or emergencies.", 
                    price : "10,000", 
                        star : four_half , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product",
                                    prodlink : "link-to-item-in-website", },            
    ]

    return (
            <Products products = {products} />
    )
}