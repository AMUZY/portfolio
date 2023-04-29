import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function GamesandConsoles (props){
    const name = "Games and Consoles"

    const subsub = [
        {name : "PS 3" ,href : KongaDefault("ps3")},
        {name : "PS 4",href : KongaDefault("ps4")},
        {name : "PS VITA",href : KongaDefault("psvita")},
        {name : "SONY PSP",href : KongaDefault("sony-psp")},
        {name : "XBOX 360",href : KongaDefault("xbox-360")},
        {name : "XBOX ONE",href : KongaDefault("xbox-one")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}