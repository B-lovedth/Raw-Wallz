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
              text='Explore Home and interior based images'
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text='Explore Home and interior based images'
              label='Nature'
              path='/services'
              />
            </ul>
            <ul className="cards__items">
              <Carditems 
              src='images/img-9.jpg'
              text='Explore Home and interior based images'
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text='Explore Home and interior based images'
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
