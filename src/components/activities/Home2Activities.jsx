import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/image/girl-image.png'
import imagelogo1 from '../../../public/image/girl-logo1.svg'
import imagelogo2 from '../../../public/image/girl-logo2.svg'
import imagelogo3 from '../../../public/image/girl-logo3.svg'

const Home2Activities = () => {
  return (
    <div className="home2-activities-check container ">
      <div className="home2active-boxes row">
        <div className="boxes1-left col-lg-6 col-md-6 col-sm-12">
          <Image src={image1} 
        
          />
        </div>
        <div className="heading-for-all boxes1-det col-lg-6 col-md-6 col-sm-12">
          <h2>We create the trips you love</h2>
          <span>
            We take the best of what we’ve learned over our 25 years of experience as luxury travel agents and bring it all together to create bespoke luxury travel experiences.
          </span>
          <div className="home2-boxes">
            <div className="home2-box">
              <Image src={imagelogo1} alt="Best Tours" className="img-fluid" width={80} height={80} 
              style={{
                mixBlendMode: "multiply"
              }}/>
<div style={{
  display:"flex",
  alignItems:"start",
  justifyContent:"center",
  flexDirection:"column"
}}>             
   <h4 className='center-alg margin-text-check'>Best Tours</h4>
<p className='center-alg margin-text-check' >A strict screening process ensures that we only offer the best tours and trip packages.</p></div>
            </div>
            <div className="home2-box">
              <Image src={imagelogo2} alt="Best Price" className="img-fluid" width={80} height={80}  style={{
                mixBlendMode: "multiply"
              }}/>
<div style={{
  display:"flex",
  alignItems:"start",
  justifyContent:"center",
  flexDirection:"column"
}}>              <h4 className='center-alg margin-text-check'>Best Price</h4>
<p className='center-alg margin-text-check'>We guarantee you the best price. Found a lower price elsewhere? We will match it.</p></div>
            </div>
            <div className="home2-box">
              
              <Image src={imagelogo3} alt="Free Cancellation" className="img-fluid" width={80} height={80}  style={{
                mixBlendMode: "multiply"
              }}/>

            
<div style={{
  display:"flex",
  alignItems:"start",
  justifyContent:"center",
  flexDirection:"column"
}}>         
       <h4 className='center-alg margin-text-check'>Free Cancellation</h4>
<p className='center-alg margin-text-check'>We understand how important flexibility is right now, just one click and it's done!</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2Activities
