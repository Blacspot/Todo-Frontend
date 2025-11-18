import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
       <h1 className='text-xs md:text-4xl font-extrabold'>Welcome to TodoPro</h1>
    <div>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Default</button>
      <button className="btn btn-neutral">Neutral</button>
       <button className="btn btn-primary">Primary</button>
       <button className="btn btn-secondary">Secondary</button>
       <button className="btn btn-accent">Accent</button>
       <button className="btn btn-info">Info</button>
       <button className="btn btn-success">Success</button>
       <button className="btn btn-warning">Warning</button>
       <button className="btn btn-error">Error</button>
    </div>
    </div>
  )
}

export default Hero