import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer-container'>
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
      <div className="footer-links">
          <div className="footer-links-wrapper">
              <div className="footer-links-items">
                  <h2>About us</h2>
                  <Link to='/sign-up'>How it Works</Link>
                  <Link to= '/sign-up'>Testimonials</Link>
                  <Link to= '/sign-up'>Career</Link>
                  <Link to= '/sign-up'>Investors</Link>
                  <Link to= '/sign-up'>Terms of Service</Link>
              </div>
          </div>
          <div className="footer-links-wrapper">
              <div className="footer-links-items">
                  <h2>Contact us</h2>
                  <Link to='/sign-up'>How it Works</Link>
                  <Link to= '/sign-up'>Testimonials</Link>
                  <Link to= '/sign-up'>Career</Link>
                  <Link to= '/sign-up'>Investors</Link>
                  <Link to= '/sign-up'>Terms of Service</Link>
              </div>
          </div>
      </div>
      <section className="social-media">
          <div className="social-media-wrap">
              <div className="footer-logo">
                  <Link className='social-logo'>
                    <i class="fa-brands fa-sitrox fa-bounce"></i>OMA
                  </Link>
              </div>
              <small className="website-rights">SOMA 2022</small>
          </div>
      </section>
    </div>
  )
}

export default Footer
