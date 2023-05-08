import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function MP3PlayersandSpeakers (props){
    const products = ServeGroupItems("MP3PlayersandSpeakers");

    return (
            <Products products = {products} />
    )
}