import React from "react";
import "./SignUp.css";

function SignUp() {
    return (
        <div className='signup-container'>
            <div className="form-container">
            <h1>SIGN UP</h1>
                <div className="form-wrapper">
                <form action="#">
                    <label>Username</label>
                    <input required type="text" name="Name" id="" placeholder="Name" />
                    <label></label>
                    <input required type="text" name="Name" id="" placeholder="Preferred Username" />
                    <label></label>
                    <input required type="email" name="Name" id="" placeholder="Email" />
                    <label></label>
                    <input required type="password" name="Name" id="p1" placeholder="Password" />
                    <input required type="password" name="" id="p2" placeholder="Confirm Password" />
                    <button type="submit">Sign up</button>
                </form>
                </div>
                
            </div>
        </div>
    );
}

export default SignUp;
