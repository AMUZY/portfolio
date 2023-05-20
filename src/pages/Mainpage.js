import { Outlet } from "react-router-dom";
import Nav from "../components/Nav"
import "../nav.scss"

export default function Mainpage () {
    return (
        <div className="relative overflow-hidden w-full h-full flex flex-col lg:flex-row">
            <div className="order-1 navbar h-auto lg:h-full lg:w-[12%]">
                <Nav />
            </div>
            <div className="order-2 overflow-y-scroll main_content theme_col flex-grow lg:h-full lg:w-[88%]">
                <Outlet />
            </div>
        </div>
    )
}