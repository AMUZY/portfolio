import "../konga.scss"
import KongaDefault from "../kongaDefault"
import SubCat from "../../../panels/SubCat"
import Cat_Template from "../Cat_Template"

export default function ComputersandAccessories () {

    const sub_cat = [
        {name : "Computing" ,href : KongaDefault("computing")},
        {name : "Laptops",href :KongaDefault("laptops")},
        {name : "PC Gaming" ,href :KongaDefault("pcgaming")},
    ]

    return (
        <>
            <SubCat sub_cat = {sub_cat}/>
            <Cat_Template />
        </>
    )
}