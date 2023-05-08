import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function PlasmaTVs (props){
    const products = ServeGroupItems("PlasmaTVs");

    return (
            <Products products = {products} />
    )
}