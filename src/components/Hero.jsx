import {HeroImg,underline,categoryImg2} from '../utils/Image'
import { BsFillPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='hero'>
        
        <div className="hero-text-container">

<h3>Best Destinations around the world</h3>

<h1>Travel, enjoy {" "} {" "}
    and live a new
and full life</h1>
<img src={underline} alt="" />



<p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>



<div className="hero-btns">
<h4>Find out more</h4>

<h5>
    <span>
<BsFillPlayFill size={25} color='white'/>
    </span>
Play Demo 
</h5>

</div>

        </div>

<div className="hero-img-container">

  {/* <span className='first-plane'> */}
    <img src={categoryImg2} alt="" />
    {/* </span> */}

    <img src={HeroImg} className='image'/>

    {/* <span className='second-plane'> */}
    <img src={categoryImg2} alt="" />
{/* </span> */}

</div>

    </div>
  )
}

export default Hero