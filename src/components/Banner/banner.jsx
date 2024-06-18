import React from 'react'
import Bannerimage from '../../assets/Banner/women2.jpg' 
import {GrSecure} from "react-icons/gr"


const Banner = () => {
  return (
    <div className='min-h-[550px] py-12 flex justify-center items-center sm:py-0 '>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div data-aos="zoom-in">
                <img className='max-w-[400px] h-[300px] w-full object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] ' src={Bannerimage }></img>
            </div>
            <div className='flex flex-col justify-center gap-6'>
                <h1 className='font-bold text-3xl sm:4xl'>Winter Sale upto 50% off</h1>
                <p className='text-gray tracking-wide leading-4'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio</p>
            </div> 
            <div>
                <div>
                    <div>
                    <GrSecure />
                    <p>Quality products</p>
                    </div>
                </div>
            </div>
        </div>
       

        </div>

    </div>
  )
}

export default Banner
