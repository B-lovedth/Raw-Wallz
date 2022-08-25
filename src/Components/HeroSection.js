import { Button } from "./Button"
import './HeroSection.css'
import '../App.css'

const HeroSection = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-wrapper'>
          <h1>Explore Amazing Images</h1>
          <p>Let's Go</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              link='/sign-up'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              link='/trailer'
            >
              WATCH TRAILER <i class='fa-regular fa-circle-play'></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection
