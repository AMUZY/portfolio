import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function OledTVs (props){
    const products = ServeGroupItems("OledTVs");

    return (
            <Products products = {products} />
    )
}