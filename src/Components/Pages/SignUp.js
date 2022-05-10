import React from "react";
import "./SignUp.css";

function SignUp() {
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
            <h1>SIGN UP</h1>
                <div className="form-wrapper">
                <form action="#">
                    <label>Username</label>
                    <input required type="text" name="Name"  placeholder="Name" />
                    <label></label>
                    <input required type="text" name="Name"  placeholder="Preferred Username" />
                    <label></label>
                    <input required type="email" name="Name"  placeholder="Email" />
                    <label></label>
                    <input required type="password" name="Name" id="p1" placeholder="Password" />
                    <input required type="password" name="" id="p2" placeholder="Confirm Password" />
                    <button type="submit" onClick={handleClick}>Sign up</button>
                </form>
                </div>
                
            </div>
        </div>
    );
}

export default SignUp;
