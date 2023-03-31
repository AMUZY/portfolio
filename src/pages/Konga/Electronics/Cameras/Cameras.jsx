import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function Cameras (){
    const name = "Cameras"

    const subsub = [
        {name : "Camcorders & VideoCameras" ,href : KongaDefault("camcorders-and-videocameras")},
        {name : "Cameralenses & Accessories",href : KongaDefault("cameralenses-and-accessories")},
        {name : "CCTV Cameras" ,href : KongaDefault("cctv-cameras")},
        {name : "Digital Cameras",href : KongaDefault("digital-cameras")},
        {name : "Proffessional Cameras",href : KongaDefault("proff-and-slr-cameras")},
    ]

    return (
        <>
            <ProductArea subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}