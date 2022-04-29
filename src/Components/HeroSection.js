import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Button } from "./Button"

const HeroSection = () => {
  return (
    <div className = 'hero-container'>
      <video src="/public/Video/video-2.mp4" autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>Let's go</p>
      <div className="hero-btns">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET STARTED<FontAwesomeIcon icon={solid('user-secret')} />
            </Button>
      </div>
    </div>
  )
}

export default HeroSection
