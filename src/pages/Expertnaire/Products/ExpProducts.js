import Products from "../../../panels/Products"
import ExpProductsPanel from "../../../panels/ExpProductsPanel"
import { exp1, exp2 } from "../Expert"


export default function ExpProducts (props){

    const products = [
        exp1,
        exp2,
    ]
    return (
            <ExpProductsPanel products = {products} />
    )
}