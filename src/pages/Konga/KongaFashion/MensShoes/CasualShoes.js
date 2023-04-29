import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

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
import { item38, item39, item40, item41 } from "../../Konga";

export default function CasualShoes (){
    const products = ServeGroupItems("CasualShoes");

    return (
            <Products products = {products} />
    )
}