import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CCTVCameras (props){
    const products = ServeGroupItems("CCTVCameras");

    return (
            <Products products = {products} />
    )
}