import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function XboxOne (props){
    const products = ServeGroupItems("XboxOne");

    return (
            <Products products = {products} />
    )
}