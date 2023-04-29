import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function HomeTheatresandAudio (props){
    const name = "Home Theatres and Audio"

    const subsub = [
        {name : "Hifi Systems" ,href : KongaDefault("hifi-systems")},
        {name : "Home Theatre",href : KongaDefault("home-theatre")},
        {name : "MP3 Players and Speakers",href : KongaDefault("mp3players-and-speakers")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}