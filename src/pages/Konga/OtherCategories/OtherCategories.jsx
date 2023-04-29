import "../konga.scss"
import KongaDefault from "../kongaDefault"
import KongaPageFormat from "../../../Custom_Functions/KongaPageFormat"

export default function OtherCategories (props) {

    const sub_cat = [
        {name : "Automotive" ,href : KongaDefault("automotive")},
        {name : "Beauty and PersonalCare",href :KongaDefault("beauty-and-personal")},
        {name : "Books and Media Library" ,href :KongaDefault("books-and-medialibrary")},
        {name : "Building and Industrial",href :KongaDefault("building-and-industrial")},
        {name : "Generators and Power" ,href :KongaDefault("generators-and-power")},
        {name : "Sports and Fitness" ,href :KongaDefault("sports-and-fitness")},
    ]

    return (
        <KongaPageFormat sub_cat = {sub_cat} />
    )
}