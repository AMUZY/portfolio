import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function ProffandSLRCameras (props){
    const products = ServeGroupItems("ProffandSLRCameras");

    return (
            <Products products = {products} />
    )
}