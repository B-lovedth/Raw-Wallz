import React from 'react'
import { Link } from 'react-router-dom'


const Carditems = () => {
  return (
    <div>
        <li className="cards--item">
            <Link className='cards--item--link'>
                <figure className="card-item-pic-wrap">
                    <img src='/' alt='Travel image' className='card--item--img'/>
                </figure>
                <div className="cards--item--info">
                    <h5 className="card--item--text">
                        
                    </h5>
                </div>
            </Link>
        </li>
    </div>
  )
}

export default Carditems
