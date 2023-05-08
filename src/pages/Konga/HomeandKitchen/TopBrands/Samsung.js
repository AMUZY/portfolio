import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";
export default function Samsung (){
    const products = ServeGroupItems("Samsung");

    return (
            <Products products = {products} />
    )
}