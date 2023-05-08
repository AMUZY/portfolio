import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";



export default function OtherAccessories (props){
    const products = ServeGroupItems("OtherAccessories");

    return (
            <Products products = {products} />
    )
}