import "../font.scss"
import "../theme.scss"

let iconstyle = "m-1 0.02rem";

export default function TechBtn(props){
    return (
        <>
            {/* BUTTON */}
            <a href = {props.link} className = "white_col flex flex-row items-center justify-center rounded-md w-max my-2 lg:my-4 px-3 py-1">
                <img src = {props.icon} className={"mx-1 " + iconstyle} alt  = {props.alt} />
                <h3 className="text"> {props.text} </h3>
            </a>
        </>
    )
}