import "../konga.scss"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"
import Cat_Template from "../Cat_Template"

export default function Electronics (props) {

    const sub_cat = [
        {name : "Accessories" ,href : KongaDefault("accessories")},
        {name : "Cameras",href :KongaDefault("cameras")},
        {name : "Games and Consoles" ,href :KongaDefault("games-and-consoles")},
        {name : "Home Theatres and Audio",href :KongaDefault("hometheatres-and-audio")},
        {name : "Televisions" ,href :KongaDefault("televisions")},
    ]

    return (
        <>
            <SubCat sub_cat = {sub_cat}/>
            <Cat_Template />
        </>
    )
}


