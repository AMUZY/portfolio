import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";


export default function GamingAccessories (props){
    const products = ServeGroupItems("GamingAccessories");

    return (
            <Products products = {products} />
    )
}