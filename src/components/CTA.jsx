import { Input } from '@mantine/core';
import { BsSendFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const CTA = () => {
  return (
    <div className='cta'>
      
<div className="cta-header">
  <h1>{" "}</h1>

<div className='icon'><BsSendFill 
color='white'
size={27}/></div>
</div>


<div className="main-text">
  <h1>Subcribe to get information latest news and other interesting offers about Cobham</h1>
</div>


<div className="cta-bottom">
  <Input 
  placeholder="Your email"
  leftSection={<IoMailOutline/>}
  w={220}
  className='input'
  
/>
  <button>Subscribe</button> 
</div>

    </div>
  )
}

export default CTA