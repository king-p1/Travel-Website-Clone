import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { Apple,googlePlay } from "../utils/Image";


const Footer = () => {
  return (
    <>
    <footer>
      

<div className="first-column">
  <h1>Jadoo.</h1>

  <p>Book your trip in minute, get full
Control for much longer. </p>
</div>

<div className="second-column">

<div className="footer-content">
  <h2 className="footer-header">Company</h2>
  <div className="footer-children">
    <h3>About</h3>
    <h3>Careers</h3>
    <h3>Mobile</h3>
  </div>
</div>

<div className="footer-content">
  <h2 className="footer-header">Contact</h2>
  <div className="footer-children">
    <h3>Help/FAQ</h3>
    <h3>Press</h3>
    <h3>Affiliates</h3>
  </div>
</div>

<div className="footer-content">
  <h2 className="footer-header">More</h2>
  <div className="footer-children">
    <h3>Airlinefees</h3>
    <h3>Airline</h3>
    <h3>Low fare tips</h3>
  </div>
</div>

</div>


<div className="third-column">
  <div className="footer-icons">
 <div className="icon-top">

<div className="single-icon">
  <BiLogoFacebook/>
</div>

<div className="single-icon">
  <BsInstagram/>
</div>

<div className="single-icon">
  <FaTwitter/>
</div>

 </div>
 
 <h2>Discover our app</h2>

 <div className="icon-bottom">

<div className="google-play">
<img src={googlePlay} alt="" style={{
  width: "16px",
}}/>
<div className="inner-google">
  <h3>GET IT ON</h3>
  <h4>GOOGLE PlAY</h4>
</div>

</div>

<div className="apple-play">
  <img src={Apple} alt="" />
</div>

 </div>
  
   </div>
</div>


    </footer>
    
    <div className="bottom-footer">
      <h2>All Rights Reserved@jadoo.co</h2>
    </div>
    </>

  )
}

export default Footer