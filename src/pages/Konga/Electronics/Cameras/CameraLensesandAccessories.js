import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CameraLensesandAccessories (props){
    const products = ServeGroupItems("CameraLensesandAccessories");

    return (
            <Products products = {products} />
    )
}