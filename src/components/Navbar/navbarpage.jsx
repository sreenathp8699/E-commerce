import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from './darkmode';
import {FaCaretDown  } from "react-icons/fa6" 


const Navbarpage = () => {
  const menu=[
    {
      id:"1",
      "name":"home",
      "link":"#",
    },
    {
      id:"2",
      "name":"TopRated",
      "link":"#",
    },
    {
      id:"3",
      "name":"KidsWear",
      "link":"#",
    },
    {
      id:"4",
      "name":"MensWear",
      "link":"#",
    },
    {
      id:"5",
      "name":"Electronics",
      "link":"#",
    }

  ] 
  const dropdownlist=[
    {
      id:"6",
      "name":"jeans",
      "link":"#"
    } ,
    {
      id:"7",
      "name":"branded-shirt",
      "link":"#"
    },
    {
      id:"8",
      "name":"sports-shoes",
      "link":"#"
    }
  ]
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
     {/* upper navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
          <a className='font-bold text-2xl small:text-3xl flex gap-2'>
            <img src={Logo} alt={"logo image"} className='w-10 uppercase' />
            ShopEase
          </a>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <div className='group relative hidden sm:block'>
              <input type='text' placeholder='search' className='w-[200px] group-hover:w-[300px] transition duration-300 rounded-full border bg-gray-300 text-sm px-2 py-1 focus:outline-none focus:border-1 focus:bg-orange-100 focus:border-primary' />
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            <button onClick={()=> alert("Ordering function will be soon")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white gap-3 group px-4 py-1 rounded-full flex items-center  '>
            <span className='group-hover:block hidden transition-all duration-200'>
            Order
            </span>
            <FaCartShopping className='text-white text-xl cursor-pointer drop-shadow-sm' />
            
          </button>
          <div>
            <Darkmode/>
          </div>
          </div>
          
        </div>
      </div>
      <div className='flex justify-center'>
      <ul className='sm:flex items-center gap-4'>
        {menu.map((val,index)=> (
          
            <a href={val.link}>

            <li key={index} className='inline-block px-4 hover:text-primary 200'>
                {val.name}
            </li>
            </a>
          
           
        ))}
        {
          
            <li className='group relative'>
              <a href="#" className='flex items-center py-4 gap-[2px] hover:text-primary'>
                Trending
                <span className=''>
                <FaCaretDown />
                </span>
                </a> 
                <div className='absolute z-[9999] hidden group-hover:block w-[200px]  rounded-md bg-white p-2 shadow-md'>
                  <ul>
                    {dropdownlist.map ((dropdata) => (
                      <a className='inline-block w-full rounded-md  hover:bg-primary/20' href={dropdata.link}>
                        <li key={dropdata.id}>
                          {dropdata.name}
                        </li>
                      </a>
                    ))}
                  </ul>
                </div>
              </li>
          
       
        }
         </ul>
      </div>
    </div>
  )
}

export default Navbarpage;
