import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaTwitter, FaFacebook, FaGithub, FaLinkedin, FaAt, FaIdCard} from "react-icons/fa";
import "./SignUp.css";
import wolf from "../signup.png"
import yellow from "../yellow2.png"

function SignUp() {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [clickOne,setClickOne] = useState(false)
    const [clickTwo,setClickTwo] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState(false)
  const modeHandle = (e) => {
    setMode(!mode)
    e.preventDefault()
  }
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
            <div
              className={
                mode ? "sign-up-container active" : "sign-up-container"
              }
            >
              <small className='small'>TRY FOR FREE</small>
              <h1>
                Create new account<span className='dot'>.</span>
              </h1>
              <div class='social-container'>
                <span class='social'>
                  <FaFacebook />
                </span>
                <span class='social'>
                  <FaTwitter />
                </span>
                <span class='social'>
                  <FaGithub />
                </span>
                <span class='social'>
                  <FaLinkedin />
                </span>
              </div>
              <form action='#' className='form'>
                <div className='row'>
                  <div className='row-input'>
                    <input
                      required
                      placeholder='firstname'
                      type='text'
                      name='firstname'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <span id='show-p'>
                      <FaIdCard />
                    </span>
                  </div>
                  <div className='row-input'>
                    <input
                      required
                      placeholder='lastname'
                      type='text'
                      name='lastname'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <span id='show-p'>
                      <FaIdCard />
                    </span>
                  </div>
                </div>
                <div className='row-input'>
                  <input
                    required
                    placeholder='E-mail'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span id='show-p'>
                    <FaAt />
                  </span>
                </div>
                <div className='row'>
                  <div className='password-flex'>
                    <input
                      required
                      placeholder='Password'
                      type={clickOne ? "text" : "password"}
                      name='password'
                      value={passwordOne}
                      onChange={(e) => setPasswordOne(e.target.value)}
                    />
                    <span id='show-p' onClick={showPasswordOne}>
                      {clickOne ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <div className='password-flex'>
                    <input
                      required
                      placeholder='Confirm password'
                      type={clickTwo ? "text" : "password"}
                      name='password'
                      value={passwordTwo}
                      onChange={(e) => setPasswordTwo(e.target.value)}
                    />
                    <span id='show-p' onClick={showPasswordTwo}>
                      {clickTwo ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
                <div className='error'>{error}</div>
                <div className='btn-wrapper'>
                  <button type='submit' onClick={handleClick}>
                    Sign up
                  </button>
                  <button className="btn-mode" onClick={(e) => modeHandle(e)}>Log-in?</button>
                </div>
              </form>
            </div>
            <div
              className={
                mode ? "sign-in-container" : "sign-in-container active"
              }
            >
              <small className='small'>WELCOME BACK</small>
              <h1>
                Login to your account<span className='dot'>.</span>
              </h1>
              <div class='social-container'>
                <span class='social'>
                  <FaFacebook />
                </span>
                <span class='social'>
                  <FaTwitter />
                </span>
                <span class='social'>
                  <FaGithub />
                </span>
                <span class='social'>
                  <FaLinkedin />
                </span>
              </div>
              <form action='#' className='form'>
                <div className='row'></div>
                <div className='row-input'>
                  <input
                    placeholder='E-mail'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span id='show-p'>
                    <FaAt />
                  </span>
                </div>
                <div className='row-input'>
                  <div className='password-flex'>
                    <input
                      placeholder='Password'
                      type={clickOne ? "text" : "password"}
                      name='password'
                      value={passwordOne}
                      onChange={(e) => setPasswordOne(e.target.value)}
                    />
                    <span id='show-p' onClick={showPasswordOne}>
                      {clickOne ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
                <div className='error'>{error}</div>
                <div className='btn-wrapper'>
                  <button onClick={handleClick}>Log in</button>
                  <button className='btn-mode' onClick={(e) => modeHandle(e)}>
                    Sign up?
                  </button>
                </div>
              </form>
            </div>
            <div className='wolf'>
              <img src={wolf} alt='wolf' />
            </div>
          </div>
        </div>
        <img src={yellow} alt='yellow' className='yellow'/>
      </div>
    );
}

export default SignUp
