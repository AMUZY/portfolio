import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CurvedTVs (props){
    const products = ServeGroupItems("CurvedTVs");

    return (
            <Products products = {products} />
    )
}