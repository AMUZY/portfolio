import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CookersandOvens (){
    const products = ServeGroupItems("CookersandOvens");

    return (
            <Products products = {products} />
    )
}