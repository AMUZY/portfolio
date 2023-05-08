import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function SonyPSP (props){
    const products = ServeGroupItems("SonyPSP");

    return (
            <Products products = {products} />
    )
}