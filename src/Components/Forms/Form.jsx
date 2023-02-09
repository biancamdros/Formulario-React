import Button from "./Button";
import Input from "./Input";
import Style from "./Form.module.css";


function Form(){
    return(
        <div className= {Style.form_div}>
            <form>
                <h1>Login</h1>
                <Input label="Username" input="text"/>
                <Input label="Password" input="password"/>
                <Button text="Login"/>
            </form>
        </div>
    )
}

export default Form;