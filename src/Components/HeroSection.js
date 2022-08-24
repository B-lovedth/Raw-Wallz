import "./HeroSection.css";
import "../App.css";
import hero1 from "./hero-1.png";
import hero2 from "./hero-5.png";
import {FaArrowAltCircleRight} from 'react-icons/fa'
const HeroSection = () => {
  return (
    <>
      <div className='hero-container' id="hero">
        <img src={hero2} alt='hero-2' className='left' />
        <div className='hero-subcontainer'>
          <div className='subcontainer'>
            <div className='text'>
              <h2>Explore</h2>
              <h2 className="color-header">Amazing Aesthetics</h2>
              <p>Let's Go</p>
              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem a, quos voluptates accusamus natus exercitationem rem placeat quisquam, iste enim voluptas atque, doloremque iure quia voluptatibus! Iure, cupiditate? Tempore iusto praesentium nemo id doloribus quos accusantium maiores iure! Non, at.</h5>
              <div className='btns'>
                <button className="bold">Get Started <FaArrowAltCircleRight className="arrow"/></button>
              </div>
            </div>
            <div className='image'>
              <img src={hero1} alt='hero-1' className='astro' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
