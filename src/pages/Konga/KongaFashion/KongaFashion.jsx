import "../konga.scss"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"
import Cat_Template from "../Cat_Template"

export default function KongaFashion (props) {

    const sub_cat = [
        {name : "Men Accessories" ,href : KongaDefault("mens-acessories")},
        {name : "Men's Shoes",href :KongaDefault("mens-shoes")},
        {name : "Men's Wear" ,href :KongaDefault("mens-wear")},
        {name : "Watches",href :KongaDefault("watches")},
        {name : "Women Accessories" ,href :KongaDefault("womensaccessories")},
        {name : "Women's Shoes",href :KongaDefault("women-shoes")},
        {name : "Women's Wear" ,href :KongaDefault("women-wear")},
    ]

    return (
        <>
            <SubCat sub_cat = {sub_cat}/>
            <Cat_Template />
        </>
    )
}