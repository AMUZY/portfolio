import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";


export default function BedroomFurniture (props){
  const products = ServeGroupItems("BedroomFurniture");


    return (
            <Products products = {products} />
    )
}