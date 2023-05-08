import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function SmartTVs (props){
    const products = ServeGroupItems("SmartTVs");

    return (
            <Products products = {products} />
    )
}