import "../../../konga.scss"
import KongaDefault from "../kongaDefault"
import KongaPageFormat from "../../../Custom_Functions/KongaPageFormat"

export default function ComputersandAccessories (props) {

    const sub_cat = [
        {name : "Computing" ,href : KongaDefault("computing")},
        {name : "Laptops",href :KongaDefault("laptops")},
        {name : "PC Gaming" ,href :KongaDefault("pcgaming")},
    ]

    

    return (
        <KongaPageFormat sub_cat = {sub_cat} />
    )
}