import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";
export default function Scanfrost (){
    const products = ServeGroupItems("Scanfrost");

    return (
            <Products products = {products} />
    )
}