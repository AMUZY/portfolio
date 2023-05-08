import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Decor (props){
  const products = ServeGroupItems("Decor");



    return (
            <Products products = {products} />
    )
}