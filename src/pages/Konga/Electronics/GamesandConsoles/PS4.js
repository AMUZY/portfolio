import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function PS4 (props){
    const products = ServeGroupItems("PS4");

    return (
            <Products products = {products} />
    )
}