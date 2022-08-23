import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.css";

function SignUp() {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [clickOne,setClickOne] = useState(false)
    const [clickTwo,setClickTwo] = useState(false)
    const [error, setError] = useState('')
    const handleClick=()=>{
    
    }
    const showPasswordOne = () => {
        setClickOne(!clickOne)
    }
    const showPasswordTwo = () => {
        setClickTwo(!clickTwo)
    }
    useEffect(() => {
        if (passwordOne.trim() !== "" && passwordTwo.trim() !== "") {
            if (passwordOne !== passwordTwo) {
                setError('The passwords are not the same!')
            } else setError('');
        }
    },[passwordOne,passwordTwo])
    return (
      <div className='signup-container'>
        <div className='form-container'>
          <div className='form-wrapper'>
            <form action='#' className='form-items'>
              <h1>SIGN UP</h1>
              <label>E-mail</label>
              <input
                required
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Name</label>
              <input
                required
                type='text'
                name='Name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Password </label>
              <div className='password-flex'>
                <input
                  required
                  type={clickOne ? "text" : "password"}
                  name='password'
                  value={passwordOne}
                  onChange={(e) => setPasswordOne(e.target.value)}
                />
                <span id='show-p' onClick={showPasswordOne}>
                  {clickOne ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <label>Confirm Password </label>
              <div className='password-flex'>
                <input
                  required
                  type={clickTwo ? "text" : "password"}
                  name='password'
                  value={passwordTwo}
                  onChange={(e) => setPasswordTwo(e.target.value)}
                />
                <span id='show-p' onClick={showPasswordTwo}>
                  {clickTwo ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className='error'>{error}</div>
              <button onClick={handleClick}>Sign-up</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp
