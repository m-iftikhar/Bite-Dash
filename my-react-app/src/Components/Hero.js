import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        <div className='h-full w-full max-h-[500px] absolute text-gray-200 bg-black/40 flex flex-col justify-center' >
            <h1 className='px-4 text-4xl md:text-6xl sm:text-5xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
            <h1 className='px-4 text-4xl md:text-6xl sm:text-5xl font-bold '> <span className='text-orange-500'> Foods</span> <span> Delivered</span></h1>
        </div>
        <img  className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  />
      </div>
    </div>
  )
}

export default Hero
