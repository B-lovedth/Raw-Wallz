import React from 'react'
import Carditems from './Carditems'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these Awesome Categories</h1>
      <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Carditems 
              src='images/img-9.jpg'
              text='Explore t'
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-9.jpg'
              text='Travel Through the Islands of Bali in a private cruise'
              label='Nature'
              path='/services'
              />
            </ul>
            <ul className="cards__items">
              <Carditems 
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the amazon jungle'
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text='travel through the islands of bali in a private cruise'
              label='Nature'
              path='/services'
              />
              <Carditems 
              src='images/img-7.jpg'
              text='Explore Home and interior based images'
              label='Home'
              path='/services'
              />
            </ul>
          </div>
      </div>
    </div>
  )
}
 
export default Cards
