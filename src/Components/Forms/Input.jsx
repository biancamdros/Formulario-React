import Style from "./Input.module.css";

function Input({label, input}){
    return(
        <div className= {Style.input_div}>
            <label htmlFor="">{label}</label>
            <input type={input} /> 
        </div>
    )
}

export default Input;
