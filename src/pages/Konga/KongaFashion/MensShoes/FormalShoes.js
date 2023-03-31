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

export default function FormalShoes (){

    const products = [
        {src : [{id : 0 , img : product2} ,{id : 1, img : product},] , alt : "product" , 
            title : "ALIENWARE LAPTOP" , 
                subtitle : "Favour Hyacinth is a great girl. She's everything a woman is meant to be. She's smart, intelligent, and has high moral standards.", 
                    price : "1,250,000", 
                        star : five , 
                            keyfeat : "these are where I will write the key features of the product", 
                                spec : "these will contain the specifications of the product",
                                    prodlink : "somewhere", },          
    ]

    return (
            <Products products = {products} />
    )
}