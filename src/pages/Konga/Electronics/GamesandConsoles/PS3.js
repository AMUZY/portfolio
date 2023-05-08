import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function PS3 (props){
    const products = ServeGroupItems("PS3");

    return (
            <Products products = {products} />
    )
}