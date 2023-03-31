import "../konga.scss"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"
import Cat_Template from "../Cat_Template"

export default function PhonesandTablets (props) {

    const sub_cat = [
        {name : "Mobile Phones" ,href : KongaDefault("mobile-phones")},
        {name : "Mobile Phone Accessories",href :KongaDefault("mobile-phones-accessories")},
        {name : "Tablets" ,href :KongaDefault("tablets")},
    ]

    return (
        <>
            <SubCat sub_cat = {sub_cat}/>
            <Cat_Template />
        </>
    )
}
