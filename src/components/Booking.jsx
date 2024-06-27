import { BookingImg, loader,extraImg } from "../utils/Image";
import { bookingInfo } from "../utils/booking"
import { BiSolidLeaf } from "react-icons/bi";
import { IoMapOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RxHeart } from "react-icons/rx";

const Booking = () => {
  return (
    <section className="booking-section">
        
<div className="booking-text">
<h1>Easy and Fast</h1>

<h3 className="title">Book Your Next Trip In 3 Easy Steps</h3>

<div className="sub-booking-text">
{bookingInfo.map(({description,icon,iconStyle,title}, index) => {
        const IconComponent = icon;
        return (
          <div key={index} className="booking-item">
            <div className="booking-item-icon">
            <IconComponent style={iconStyle} />
            </div>

            <div className="booking-item-text">

            <h3>{title}</h3>
            <p>{description}</p>
            </div>
          </div>
        );
      })}</div>

</div>

 
<div className="booking-img">
<img src={BookingImg} alt="" />


<div className="booking-text-container">

    <div className="booking-img-text">
<h2>Trip To Greece</h2>

<h3> 14-29 June | by Robbin johan </h3>
    </div>

    <div className="booking-img-icons">
<span><BiSolidLeaf/></span>
<span><IoMapOutline/></span>
<span><RiSendPlaneFill/></span>
    </div>

    <div className="booking-img-footer">

<h4><HiOutlineBuildingOffice2/> 24 people going</h4>

<span><RxHeart size={22} color="#4152CA"/></span>
    </div>

</div>



</div>
<div className="blur-circle"></div>


<div className="extra-box">
<img src={extraImg} alt="" />

<div className="extra-box-text">
    <div className="first-text-content">

    <h4>Ongoing</h4>
    <h3>Trip to rome</h3>
    </div>
    
    <div className="second-text-content">

    <h5>
        <span>40%</span> completed

    </h5>
    <img src={loader} alt="" style={{
        width:'130px',
        marginTop:'-10px'
    }}/>
</div>

</div>
</div>



    </section>
  )
}

export default Booking