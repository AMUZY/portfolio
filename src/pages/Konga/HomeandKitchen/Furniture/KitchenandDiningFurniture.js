import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";



export default function KitchenandDiningFurniture (props){
  const products = ServeGroupItems("KitchenandDiningFurniture");


    return (
            <Products products = {products} />
    )
}