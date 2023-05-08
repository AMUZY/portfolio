import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CamcordersandVideoCameras (props){
    const products = ServeGroupItems("CamcordersandVideoCameras");

    return (
            <Products products = {products} />
    )
}