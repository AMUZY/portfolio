import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function HomeTheatre (props){
    const products = ServeGroupItems("HomeTheatre");

    return (
            <Products products = {products} />
    )
}