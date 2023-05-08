import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";


export default function LivingRoomFurniture (props){
  const products = ServeGroupItems("LivingRoomFurniture");


    return (
            <Products products = {products} />
    )
}