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
                    <label></label>
                    <input required type="text" name="Name"  placeholder="Preferred Username" />
                    <label></label>
                    <input required type="email" name="Name"  placeholder="Email" />
                    <p id="show-p">show <i className="fab fa eye"></i></p>
                    <input required type="password" name="Name" id="p1" placeholder="Password" />
                    <input type="checkbox" onclick="myFunction()"/>
                    <input required type="password" name="" id="p2" placeholder="Confirm Password" />
                    <button type="submit" onClick={handleClick}>Sign up</button>
                </form>
                </div>
                
            </div>
        </div>
    );
}

export default SignUp;
