import React from 'react'

function Container({overflow, className, children}) {
  return (
    <div className={overflow === "hidden" ? "overflow-x-hidden" : ""}>
      <div className='container mx-auto'>
        {/* <div className={`${className} mx-4 md:mx-8 lg:mx-24 xl:mx-32`}>{children}</div> */}
        <div className={`${className} mx-4 md:mx-12`}>{children}</div>
      </div>
    </div>
  )
}

export default Container