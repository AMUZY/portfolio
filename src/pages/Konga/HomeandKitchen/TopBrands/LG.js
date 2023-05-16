import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function LG (){
    const products = ServeGroupItems("LG");

    return (
            <Products products = {products} />
    )
}
