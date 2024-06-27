import { navLinks } from '../utils/navLinks'
import {Logo,HeroBg} from '../utils/Image'
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <>
    <div className='navbar'>
        
<div className="logo">
<img src={Logo} alt="" />
</div>

<div className="nav-links">
{navLinks.map(({link,title},index)=>(
    <a href={link} key={index} style={{
        color:'black'
    }}>{title}</a>
))}
<ul>
    <li>Login</li>
    <li>Sign Up</li>
    <li>EN <IoIosArrowDown/> </li>
</ul>
</div>

</div>

<div className="extra-links">
<img src={HeroBg} alt="" />
    </div>


</>
  )
}

export default NavBar