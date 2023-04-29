import "../konga.scss"
import KongaDefault from "../kongaDefault"
import KongaPageFormat from "../../../Custom_Functions/KongaPageFormat"

export default function Electronics (props) {

    const sub_cat = [
        {name : "Accessories" ,href : KongaDefault("accessories")},
        {name : "Cameras",href :KongaDefault("cameras")},
        {name : "Games and Consoles" ,href :KongaDefault("games-and-consoles")},
        {name : "Home Theatres and Audio",href :KongaDefault("hometheatres-and-audio")},
        {name : "Televisions" ,href :KongaDefault("televisions")},
    ]

    return (
        <KongaPageFormat sub_cat = {sub_cat} />
    )
}


