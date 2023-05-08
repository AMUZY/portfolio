import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function ProcessorsandMincers (){
    const products = ServeGroupItems("ProcessorsandMincers");

    return (
            <Products products = {products} />
    )
}