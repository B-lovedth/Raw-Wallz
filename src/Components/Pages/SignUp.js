import React, { useState } from "react";
import "./SignUp.css";
import Footer from '../Footer'
import { Button } from "../Button";

function SignUp() {
    const [click,SetClick] = useState(false)
    const pass = document.getElementById('show-p') 
    console.log(pass)
    const handleClick=()=>{
        const p1 = document.getElementById('p1')
        const p2 = document.getElementById('p2')
        if(p1.value===p2.value){
            console.log("Same password")
        }else{
            console.log("different password")
        }
    }
    return (
        <div className='signup-container'>
            <div className="form-container">
                <div className="form-wrapper">
                <form action="#" className="form-items">
                    <h1>SIGN UP</h1>
                    <label>E-mail</label>
                    <input required type="email" name="Name"  placeholder="Email" />
                    <label>Name</label>
                    <input required type="text" name="Name"  placeholder="Preferred Username" />
                    <div className="password-flex">
                        <label>Password  </label>
                        <p  id="show-p">show<i className={click ? "fa-solid fa-eye-slash": "fa-solid fa-eye"}></i></p>
                    </div>
                   
                    <input required type="password" name="Name" id="p1" placeholder="********" />
                    <label>Confirm Password</label>
                    <input required type="password" name="" id="p2" placeholder="********" />
                    
                    <Button onClick={handleClick}>Sign-up</Button>
                    
                </form>
                </div>
            </div>
            <Footer/>        
        </div>
    );
}

export default SignUp;
