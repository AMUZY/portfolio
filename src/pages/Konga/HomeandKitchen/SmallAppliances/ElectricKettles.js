import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function ElectricKettles (){
    const products = ServeGroupItems("ElectricKettles");

    return (
            <Products products = {products} />
    )
}