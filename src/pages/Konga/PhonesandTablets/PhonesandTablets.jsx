import "../../../konga.scss"
import KongaDefault from "../kongaDefault"
import KongaPageFormat from "../../../Custom_Functions/KongaPageFormat"

export default function PhonesandTablets (props) {

    const sub_cat = [
        {name : "Mobile Phones" ,href : KongaDefault("mobile-phones")},
        {name : "Mobile Phone Accessories",href :KongaDefault("mobile-phones-accessories")},
        {name : "Tablets" ,href :KongaDefault("tablets")},
    ]

    return (
        <KongaPageFormat sub_cat = {sub_cat} />
    )
}
