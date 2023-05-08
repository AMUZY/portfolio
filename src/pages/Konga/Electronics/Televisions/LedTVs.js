import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function LedTVs (props){
    const products = ServeGroupItems("LedTVs");

    return (
            <Products products = {products} />
    )
}