import { useState } from "react";
import Logo from "../shared/logo";
import './login.css'
import Register from "./register";
import { data, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
    
    const [isLoading, setIsLoading] = useState(true)
    const[isRegister, setIsRegister] = useState(false)
      const [loginDate, setLoginDate] = useState (
        {
            email: '',
            password: ''
        }
      );
    
          const navigate = useNavigate()

      const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginDate(prevState =>({...prevState, [name]: value}))
      }
    //   const handleLogin = (e) =>{
    //     e.preventDefault()
    //     console.log(loginDate)
    //     setIsRegister(true)
    //     return <Register /> 
    //   }

      const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false)

   try {
         
    // if (!formData.fullName || !formData.email || !formData.passWord) return alert("all inputs are required") 
  
    const response = await fetch ("https://zyloo-api-v1.onrender.com/auth/login", {
      method: "POST", 
      headers: {"Content-Type" : "application/json"}, 
      credentials: "include",
      body: JSON.stringify( loginDate )
    })
    
    const tryLogIn = await response.json()

    localStorage.setItem("token", JSON.stringify(tryLogIn))

    navigate("/", {replace: true})
    console.log(tryLogIn);

    
    setIsLoading(false)
   } catch (error) {
    console.log(error)
    setIsLoading(false)
   }
  };
  
        
        
    return (
        <div className="login-page">

           <div className="mewam">
             
                
                <div className="login-brand">
                    <div className="logo">
                            <Logo />
                    </div>
                    <span className="login-brand-details">
                        CineScope
                    </span>
                
            </div>

            <div className="login-header">
                    <h1 className="login-title">
                        Welcome back
                    </h1>
                    <p className="login-subtitle">
                        Sign in to continue your cinematic journey.
                    </p>
            </div>

            <form action="login" onSubmit={handleSubmit} >
                
                <div login-field>
                    <label  className="labels" htmlFor="email">
                        Email
                    </label>
                    <br />

                    <input 
                    className="email-input"
                    type="email"
                     name="email"
                      value={loginDate.email} 
                      onChange={handleChange} 
                     placeholder="Enter your email address"
                     required />
                     
                </div>

                <div className="login-field">
                     <span className="password-span">
                        <label className="labels"  htmlFor="password">
                        Password
                        </label> 
                        <a  className="forget-pass"  href="#forget password">
                            Forget password?
                        </a>
                        </span> 

                        <input 
                        className="password-input"
                        type="password" name="password"
                        value={loginDate.password}
                        onChange={handleChange}
                        placeholder="Enter your password"  /> 
                </div>

                <div className="signIn-div">
                     <button className="signIn-btn" type="submit">
                        {isLoading ? "Sign In" : "SignIn in progress"}
                     {isRegister}
                        </button>   
                </div>
                
            </form>

            <div className="login-footer">
                 <span className="dont-have-acct">Don't have an account?</span>  
                 <a
                 className="signUp-login-link"
                 href="#signUp">
                    Sign Up
                    </a> 
            </div>
           </div>
        </div>
    )
}