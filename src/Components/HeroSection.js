import { Button } from "./Button"
import './HeroSection.css'
import './src/App.css'

const HeroSection = () => {
  return (
    <div className = 'hero-container'>
      <video src="/public/Video/video-2.mp4" autoPlay loop muted/>
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
      </div>
    </div>
  )
}

export default HeroSection
