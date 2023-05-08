import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Polystar (){
    const products = ServeGroupItems("Polystar");

    return (
            <Products products = {products} />
    )
}