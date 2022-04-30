import { Button } from "./Button"
import './HeroSection.css'
import '../App.css'

const HeroSection = () => {
  return (
    <div className = 'hero-container'>
      <video src="./Video/video-1.mp4" autoPlay loop muted/>
      <h1>Adventure Awaits</h1>
      <p>Let's go</p>
      <div className="hero-btns">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET STARTED
            </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
              WATCH TRAILER <i class="fa-regular fa-circle-play"></i>
            </Button>
      </div>
    </div>
  )
}

export default HeroSection
