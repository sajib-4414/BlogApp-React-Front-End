import {useState} from "react";
import axios from "axios";

function LoginLogout (){
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginEmailError,setLoginEmailError] = useState("")
    const [loginPasswordError,setLoginPasswordError] = useState("")

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = event =>{
        let name = [event.target.name]
        let value = event.target.value
        //console.log("Event name is : "+name+", value is "+value)
        if (name == "email"){
            setLoginEmail(value)
            if (!validateEmail(value)){
                setLoginEmailError("Invalid Email")
            }
            else {
                setLoginEmailError("")
            }
        }
        else if (name == "password"){
            setLoginPassword(value)
        }
    }
    const handleFormSubmit = formEvent=> {
        formEvent.preventDefault();
        //check for valiation
        if ( !validateEmail(loginEmail)){
            setLoginEmailError("Invalid Email")
            return;
        }
        else{
            setLoginEmailError("")
        }
        if (loginPassword === ""){
            setLoginPasswordError("Password cannot be left empty")
            return;
        }
        //do login now
        const login_payload = {
            username:loginEmail
        }
        axios
        .post("http://localhost:8000/users/", {
          username: loginEmail,
          password: loginPassword
        })
        .then(res => {
          console.log(res);

        });
        //now clear the state
        setLoginEmail("")
        setLoginPassword("")


    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <form method="post" onSubmit={handleFormSubmit}>
                            <div className="form-group row">
                                <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">Email</label>
                                <div className="col-md-6">
                                    <input type="text" value={loginEmail} onChange={handleChange} id="email_address" className="form-control" name="email" />
                                    <small id="username_error" className="text-danger">
                                        {loginEmailError}
                                    </small>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                <div className="col-md-6">
                                    <input type="password" id="password" value = {loginPassword} onChange={handleChange} className="form-control" name="password" />
                                    <small id="password_error" className="text-danger">
                                        {loginPasswordError}
                                    </small>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 offset-md-4">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"/>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                                <a href="#" className="btn btn-link">
                                    Forgot Your Password?
                                </a>
                            </div>

                        </form>
                        <br/>
                    </div>


            </div>
        </div>
</div>
    )
}
export default LoginLogout