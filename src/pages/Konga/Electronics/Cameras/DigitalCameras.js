import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function DigitalCameras (props){
    const products = ServeGroupItems("DigitalCameras");

    return (
            <Products products = {products} />
    )
}