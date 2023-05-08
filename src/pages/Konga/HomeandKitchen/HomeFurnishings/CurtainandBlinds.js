import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function CurtainandBlinds (props){
  const products = ServeGroupItems("CurtainandBlinds");


    return (
            <Products products = {products} />
    )
}