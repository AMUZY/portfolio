import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function IronsandSteamers (){
    const products = ServeGroupItems("IronsandSteamers");

    return (
            <Products products = {products} />
    )
}