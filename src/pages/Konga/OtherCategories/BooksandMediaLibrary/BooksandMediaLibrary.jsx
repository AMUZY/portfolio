import KongaDefault from "../../kongaDefault"
import { Outlet } from "react-router-dom"
import ProductArea from "../../../../panels/ProductArea"

export default function BooksandMediaLibrary  (props){
    const name = "Books & Media Library"

    const subsub = [
        {name : "Audio Books" ,href : KongaDefault("audio-books")},
        {name : "Books",href : KongaDefault("hardbooks")},
        {name : "Keyboard,Pianos & Drums",href : KongaDefault("keyboard-pianos-and-drums")},
        {name : "Musical Equipment",href : KongaDefault("musical-equipment")},
        {name : "String Instruments",href : KongaDefault("string-instruments")},
    ]

    return (
        <>
            <ProductArea  subsub = {subsub} name = {name}/>
            <Outlet />
        </>
    )
}