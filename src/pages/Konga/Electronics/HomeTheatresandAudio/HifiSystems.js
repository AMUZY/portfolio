import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function HifiSystems (props){
    const products = ServeGroupItems("HifiSystems");

    return (
            <Products products = {products} />
    )
}