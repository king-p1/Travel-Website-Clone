import { company1,company2,company3,company4,company5 } from "../utils/Image"


const Companies = () => {
  return (
    <div className='companies'>
      
<div className="first-company">
  <img src={company1} alt="" />
</div>

<div className="company">
<img src={company2} alt="" />
</div>

<div className="center-company">
<img src={company3} alt="" />
</div>

<div className="fourth-company">
<img src={company4} alt="" />

</div>

<div className="company">
<img src={company5} alt="" />
</div>



    </div>
  )
}

export default Companies