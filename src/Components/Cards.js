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
              <Carditems 
              src='images/img-9.jpg'
              text='Explore the hidden Water'
              label='Adventure'
              path='/services'
              />
            </ul>
          </div>
      </div>
    </div>
  )
}
 
export default Cards
