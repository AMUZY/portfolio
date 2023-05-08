import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";


export default function MenBags (){
    const products = ServeGroupItems("MenBags");

    return (
            <Products products = {products} />
    )
}