import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function AirConditionersandCoolers (){
    const products = ServeGroupItems("AirConditionersandCoolers");

    return (
            <Products products = {products} />
    )
}