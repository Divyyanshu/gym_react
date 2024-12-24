import React from 'react'
import Contact_us from '../assets/image/contact-us-image.jpg'

const Contact = () => {
  return (
    <>
    <div className='flex'>
      {/* image div */}
      <div>
       <img src={Contact_us} alt="" className='h-screen w-full'/>
      </div>
      {/* form div */}
      <div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eveniet.</p>
      </div>
    </div>
    </>
  )
}

export default Contact