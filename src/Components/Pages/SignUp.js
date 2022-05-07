import React from "react";
// import "./SignUp.css";

function SignUp() {
    return (
        <div className='signup-container'>
            <h1>definition</h1>
            <form>
                <label>Article title:</label>
                <input type='text' required></input>
                <label>Article body:</label>
                <textarea required></textarea>
                <label>Article author:</label>
                <select>
                    <option value='mario'>mario</option>
                    <option value='soma'>soma</option>
                </select>
                <input type='text' required placeholder='-Your Name-' />
                <button>Add article</button>
            </form>
            <h1>prop money</h1>
        </div>
    );
}

export default SignUp;
