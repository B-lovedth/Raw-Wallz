import React from 'react'
import { Button } from './Button'

const Footer = () => {
  return (
    <div className='fotter-container'>
      <section className="footer-subcription">
          <p className="footer-subscription-heading">
              Join the Adventure newsletter to Bla blah blah
          </p>
          <p className="footer-subscription-text">
              You can Blah blah blah
          </p>
          <div className="input-areas">
              <form >
                  <input type="email" name="email" placeholder='your Email' className='footer-input' />
                  <Button buttonStyle='btn-outline' link='/services'>
                    Subscribe
                  </Button>
              </form>
          </div>
      </section>
    </div>
  )
}

export default Footer
