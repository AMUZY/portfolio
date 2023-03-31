import "./konga.scss"
import { Outlet } from "react-router-dom"

export default function Cat_Template (){
    return (
        <>
            <div className="w-full cat flex flex-col">
                <Outlet />
            </div>
        </>
    )
}