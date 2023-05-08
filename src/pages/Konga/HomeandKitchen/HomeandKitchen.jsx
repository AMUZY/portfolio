import "../../../konga.scss"
import KongaDefault from "../kongaDefault"
import KongaPageFormat from "../../../Custom_Functions/KongaPageFormat"

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
        <KongaPageFormat sub_cat = {sub_cat} />
    )
}