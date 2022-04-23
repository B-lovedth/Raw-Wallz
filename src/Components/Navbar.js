import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
     const[click,setClick] = useState(false)
     const handleClick=()=>{
        setClick(!click)
     }
    return (
    <div>
      <nav className="navbar"> 
          <div className="navbar-container">
            <Link to="/" className='navbar-logo'>
                SOMA <i></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
