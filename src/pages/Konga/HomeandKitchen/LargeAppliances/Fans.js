import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Fans (){
    const products = ServeGroupItems("Fans");

    return (
            <Products products = {products} />
    )
}