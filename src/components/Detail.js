import "../font.scss"


let title = "my-1 w-32 md:w-48 lg:w-56 mr-12 white text_title";
let answer = "w-auto white text_italic";

export default function Detail (props) {
    return (
        <div className="w-full flex flex-row justify-start h-auto my-2 mx-2">
            <h3 className={title}>{props.title + ":"}</h3>
            <h3 className={answer}>{props.answer}</h3>
        </div>
    )
}