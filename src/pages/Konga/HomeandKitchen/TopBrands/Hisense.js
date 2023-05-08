import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Hisense (){
    const products = ServeGroupItems("Hisense");

    return (
            <Products products = {products} />
    )
}