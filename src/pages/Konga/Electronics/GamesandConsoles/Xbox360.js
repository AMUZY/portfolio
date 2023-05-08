import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Xbox360 (props){
    const products = ServeGroupItems("Xbox360");

    return (
            <Products products = {products} />
    )
}