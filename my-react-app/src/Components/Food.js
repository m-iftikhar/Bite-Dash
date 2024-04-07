import React from 'react'
import { data } from '../data/Data'
const Food = () => {
    const [food, setFood]=React.useState(data)
      //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className='max-w-[1640px] p-4 py-12 mx-auto'>
     <h1 className='text-4xl text-orange-600 font-bold text-center'>Top Rated Menu Items</h1>
       {/* filter row */}
     <div className='flex flex-col lg:flex-row justify-between'>
       
       <div>
       <p className='font-bold text-gray-700 text-xl'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
            <button onClick={() => setFood(data)}  className='bg-orange-500 border-black hover:text-white m-1'>All</button>
            <button  onClick={() => filterType("burger")} className='bg-orange-500 border-black hover:text-white m-1'>burger</button>
            <button  onClick={() => filterType("pizza")} className='bg-orange-500 border-black hover:text-white m-1'>Pizza</button>
            <button onClick={() => filterType("chicken")} className='bg-orange-500 border-black hover:text-white m-1'>Chicken</button>
            <button  onClick={() => filterType("salad")} className='bg-orange-500 border-black hover:text-white m-1'>salad</button>
        </div>

       </div>
       <div>
        <p className='font-bold text-gray-700 text-xl'>Filter Price</p>
        <div className='flex justify-between w-full max-w-[400px]'>
        <button  onClick={() => filterPrice("$")} className='bg-orange-500 border-black hover:text-white m-1'>$</button>
        <button   onClick={() => filterPrice("$$")} className='bg-orange-500 border-black hover:text-white m-1'>$$</button>
        <button  onClick={() => filterPrice("$$$")}  className='bg-orange-500 border-black hover:text-white m-1'>$$$</button>
        <button  onClick={() => filterPrice("$$$$")} className='bg-orange-500 border-black hover:text-white m-1'>$$$$</button>
        </div>
       </div>

     </div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            food.map((item,index) =>(
              <div key={index} className='border shadow-lg hover:scale-105  rounded-lg duration-300'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'></img>
                <div className='flex justify-between px-2 py-4'>
                  <p className='font-bold'> {item.name}  </p>
                  <p>   <span className='bg-orange-500 text-white rounded-full p-1'>{item.price}</span></p>
                 
                  </div>
                </div>
                
            ))
          }
     </div>
    </div>
  )
}

export default Food

