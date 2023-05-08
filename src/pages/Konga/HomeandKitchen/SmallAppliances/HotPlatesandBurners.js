import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function HotPlatesandBurners (){
    const products = ServeGroupItems("HotPlatesandBurners");

    return (
            <Products products = {products} />
    )
}