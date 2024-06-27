import { useState } from "react";
import { testimonials } from "../utils/testimonials";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";


const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h2>TESTIMONIALS</h2>
        <h1>What People Say About Us.</h1>

        <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      </div>

      <div className="testimonial-content">
        {testimonials.map(({image,location,name,text}, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img src={image} alt={name} className="testimonial-image" />
           <div className="inner-card">

            <p>{text}</p>

            <div className="extra-inner-card">

            <h3>{name}</h3>
            <h4>{location}</h4>
            </div>
           </div>
          </div>
        ))}

<div className="testimonial-navigation">
        <button onClick={handlePrevClick} className="testimonial-arrow left-arrow">
          <MdOutlineKeyboardArrowUp/>
        </button>

        <button onClick={handleNextClick} className="testimonial-arrow right-arrow">
          <MdOutlineKeyboardArrowDown/>
        </button>

      </div>
      </div>

      

      

    </div>
  );
};
export default Testimonials
