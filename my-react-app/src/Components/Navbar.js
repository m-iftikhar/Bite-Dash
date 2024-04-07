import React from 'react';
import { HiMenu, HiSearch } from 'react-icons/hi';
import { FaCartShopping } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';

const Navbar = () => {
  const [toggle, setToggle]=React.useState(false)
  function onToggle(){
    setToggle(!toggle)
  }
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
       <div className='flex items-center  '>
        <div className='cursor-pointer '>
          <HiMenu onClick={onToggle} size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Bite <span className='font-bold'>Dash</span></h1> {/* Removed space before <span> */}
        <div className='hidden lg:flex items-center bg-gray-200 p-1 rounded-full text-[14px]'>
          <p className='bg-black text-white rounded-full p-2' >Delivery</p>
          <p className='p-2'>Pick up</p>
        </div>
      </div>
      <div className='flex bg-gray-300 rounded-full w-[200px] sm:w-[300px] lg:w-[400px] items-center px-2'>
      <HiSearch size={25} />
      <input type='text' placeholder='search food' className='bg-transparent p-2 w-full focus:outline-none '></input>
      </div>
      < button className='  bg-black text-white py-2 rounded-full hidden md:flex items-center'>
       <FaCartShopping size={30}/> Cart
      </button>
     {toggle ? 
      <div className='bg-black/80 w-full h-screen fixed left-0 top-0 z-10'> </div>:''}
      <div className={toggle ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
      < FiDelete size={30} onClick={onToggle}  className='absolute right-4 cursor-pointer top-4'/>
      <h2 className='text-2xl p-4'>Best <span className='font-bold'> Eats </span></h2>
      <nav>
        <ul className='text-gray-800 p-4 flex-col flex'>
          <li className='flex text-xl py-4 '>< TbTruckDelivery  size={25} className='mr-4'/> Order</li>
          <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
        
      
    
  );
};

export default Navbar;
