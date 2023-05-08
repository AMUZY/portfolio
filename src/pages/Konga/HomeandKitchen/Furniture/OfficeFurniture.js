import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";



export default function OfficeFurniture (props){
  const products = ServeGroupItems("OfficeFurniture");


    return (
            <Products products = {products} />
    )
}