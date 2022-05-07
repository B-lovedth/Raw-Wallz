import React from 'react'
import './SignUp.css'

function SignUp(){
    return(
    <div>
        <form>
        <label>Article title:</label>
        <input
          type="text"
          required
          ></input>
        <label>Article body:</label>
        <textarea
          required
        ></textarea>
        <label>Article author:</label>
        <select
        >
          <option value="mario">mario</option>
          <option value="soma">soma</option>
        </select>
        <input
           type="text"
           required
           placeholder='-Your Name-'
        />
        <button>Add article</button>
      </form>  
    </div>
    
    )
}


export default SignUp