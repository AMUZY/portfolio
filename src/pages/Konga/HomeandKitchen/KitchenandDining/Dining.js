import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function Dining (props){
  const products = ServeGroupItems("Dining");



    return (
            <Products products = {products} />
    )
}