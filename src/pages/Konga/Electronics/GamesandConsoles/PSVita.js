import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function PSVita (props){
    const products = ServeGroupItems("PSVita");

    return (
            <Products products = {products} />
    )
}