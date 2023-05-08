import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";



export default function TelevisionAccessories (props){
    const products = ServeGroupItems("TelevisionAccessories");

    return (
            <Products products = {products} />
    )
}