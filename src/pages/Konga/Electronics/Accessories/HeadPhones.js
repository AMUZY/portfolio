import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";



export default function HeadPhones (props){
    const products = ServeGroupItems("HeadPhones");

    return (
            <Products products = {products} />
    )
}