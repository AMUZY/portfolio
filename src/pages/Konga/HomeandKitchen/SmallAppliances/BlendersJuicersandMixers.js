import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function BlendersJuicersandMixers (){
    const products = ServeGroupItems("BlendersJuicersandMixers");

    return (
            <Products products = {products} />
    )
}