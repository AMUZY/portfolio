import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CookandBakeware (props){
  const products = ServeGroupItems("CookandBakeware");


    return (
            <Products products = {products} />
    )
}