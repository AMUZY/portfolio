import "../konga.scss"
import Navbar from "../panels/Navbar"
import SubCat from "../panels/SubCat"
import Cat_Template from "../pages/Konga/Cat_Template"

export default function KongaPageFormat(props){
    return (
        <>
            {/* DESKTOP */}
            <div className="relative w-full desk_konga flex flex-col">
            <Navbar />
                <div className="flex newdude flex-col w-full xl:flex-row">
                    <SubCat sub_cat = {props.sub_cat}/>
                    <Cat_Template />
                </div>
            </div>
            {/* MOBILE */}
            <div className="relative w-full mob_konga flex flex-col">
                <div className="w-full white_col flex flex-row border-b-[1px] border-gray-300">
                    <Navbar />
                    <SubCat sub_cat = {props.sub_cat}/>
                </div>
                <div className="flex newdude flex-col w-full xl:flex-row">
                    <Cat_Template />
                </div>
            </div>
        </>
    )
}