import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function KitchenUtensils (){
    const products = ServeGroupItems("KitchenUtensils");

    return (
            <Products products = {products} />
    )
}