import "../button.scss"

export default function Subcatbtn (props){
    return (
        <>
            <button className="subcat_btn">
                <h2>
                    {props.name}
                </h2>
            </button>
        </>
    )
}