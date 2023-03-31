import "../konga.scss"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"
import Cat_Template from "../Cat_Template"

export default function HomeandKitchen (props) {

    const sub_cat = [
        {name : "Furniture" ,href : KongaDefault("furniture")},
        {name : "Home Furnishings",href :KongaDefault("home-furnishings")},
        {name : "Kitchen and Dining" ,href :KongaDefault("kitchen-and-dining")},
        {name : "Large Appliances",href :KongaDefault("large-appliances")},
        {name : "Small Appliances" ,href :KongaDefault("small-appliances")},
        {name : "Top Brands" ,href :KongaDefault("top-brands")},
    ]

    return (
        <>
            <SubCat sub_cat = {sub_cat}/>
            <Cat_Template />
        </>
    )
}