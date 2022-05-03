import React from 'react'
import Carditems from './Carditems'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these Awesome Destinations</h1>
      <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__item">
              <Carditems/>
            </ul>
          </div>
      </div>
    </div>
  )
}
 
export default Cards
