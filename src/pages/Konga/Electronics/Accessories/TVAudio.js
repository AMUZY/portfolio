import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function TVAudio (props){
    const products = ServeGroupItems("TVAudio");

    return (
            <Products products = {products} />
    )
}