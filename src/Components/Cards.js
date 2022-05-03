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
              text="Home & interior images"
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text="Enjoy Nature's serenity"
              label='Nature'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text="Enjoy Nature's serenity"
              label='Nature'
              path='/services'
              />
            </ul>
            <ul className="cards__items">
              <Carditems 
              src='images/img-9.jpg'
              text='the words i speak'
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text='the words i speak'
              label='Nature'
              path='/services'
              />
            </ul>
          </div>
      </div>
    </div>
  )
}
 
export default Cards
