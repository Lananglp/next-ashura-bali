import React from 'react'

function GoogleMap() {
  return (
    <div className='sticky z-10'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13266.747409228918!2d115.23143677249351!3d-8.669892258063783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240f51f1412a5%3A0xa7e549b0b86dc50e!2sLapangan%20Puputan%20Renon!5e0!3m2!1sid!2sid!4v1717470736390!5m2!1sid!2sid" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-[40rem] w-full'/>
    </div>
  )
}

export default GoogleMap