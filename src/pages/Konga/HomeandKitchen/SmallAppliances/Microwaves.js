import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Microwaves (){
    const products = ServeGroupItems("Microwaves");

    return (
            <Products products = {products} />
    )
}