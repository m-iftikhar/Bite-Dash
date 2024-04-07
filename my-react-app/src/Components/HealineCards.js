import React from 'react'

const HealineCards = () => {
  return (
    <div className='max-w-[1640px] py-12 mx-auto p-4 grid md:grid-cols-3 gap-6'>
      <div className='relative rounded-xl'>
        <div className='absolute rounded-xl text-white  bg-black/50 w-full h-full'>
            <p className='text-2xl pt-4 px-2 font-bold'>Sun's Out , Bogo's Out</p>
            <p className='px-2'> Through 8/26</p>
            <button className='border-white bg-white text-black mx-4 bottom-4 absolute'> order now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'  src='https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
      <div className='relative rounded-xl'>
        <div className='absolute rounded-xl text-white  bg-black/50 w-full h-full'>
            <p className='text-2xl pt-4 px-2 font-bold'>Cooked Sea food</p>
            <p className='px-2'> Through 8/26</p>
            <button className='border-white bg-white text-black mx-4 bottom-4 absolute'> order now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'  src='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
      </div>
      <div className='relative rounded-xl'>
        <div className='absolute rounded-xl text-white  bg-black/50 w-full h-full'>
            <p className='text-2xl pt-4 px-2 font-bold'>Steak Meal</p>
            <p className='px-2'> Added Daily</p>
            <button className='border-white bg-white text-black mx-4 bottom-4 absolute'> order now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'  src='https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
    </div>
  )
}

export default HealineCards
