import "../konga.scss"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"
import Cat_Template from "../Cat_Template"

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
        <>
            <SubCat sub_cat = {sub_cat}/>
            <Cat_Template />
        </>
    )
}