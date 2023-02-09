import Style from "./Button.module.css";

function Button({text}){
    return(
        <div className= {Style.button_div}>
            <button>{text}</button>
        </div>
    )
}
export default Button;
