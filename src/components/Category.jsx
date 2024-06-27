import { RedRectangle,yellowCircle,categoryImg1,categoryImgR2,categoryImg3,categoryImg4 } from '../utils/Image'


const Category = () => {
  return (
    <div className='category'>
        
        <h2>Category</h2>

<h1>We Offer Best Services</h1>


<div className="category-cards">
   
    <div className="card">
<img src={categoryImg1} alt="" />

<h3>Calculated Weather</h3>

<p>Built Wicket longer admire do barton vanity itself do in it.</p>
    </div>

    <div className="card ">
        <div className="second-card">

<img src={categoryImgR2} alt="" className='category-plane' />

<h3 className='category-plane'>Best Flights</h3>

<p>
Engrossed listening. Park gate sell they west hard for the. 
   </p>
   </div>
   
   <img src={RedRectangle} alt="" className='category-redtangle'/>
  
    </div>

    <div className="card third-card">
        <img src={yellowCircle} alt="" className='yellow-circle' />
<img src={categoryImg3} alt="" />

<h3>Local Events</h3>

<p>
Barton vanity itself do in it. Preferd to men it engrossed listening.     </p>
    </div>

    <div className="card">
<img src={categoryImg4} alt="" />

<h3>Customization</h3>

<p>
We deliver outsourced
aviation services for
military customers    </p>
    </div>

 

   

 
</div>

    </div>
  )
}

export default Category