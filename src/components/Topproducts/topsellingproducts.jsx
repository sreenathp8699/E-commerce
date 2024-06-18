import React from 'react'
import image1 from '../../assets/topproducts/shirt.png'
import image2 from '../../assets/topproducts/shirt2.png'
import image3 from '../../assets/topproducts/shirt3.png'
import { FaStar } from 'react-icons/fa6'

const Topsellingproducts = () => {
    const productdata=[
        {
            id:"1",
            img:image1,
            title:"Casual wear",
            descrption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, totam? Quasi dolores nesciunex praesentim"

        },
        {
            id:"2",
            img:image2,
            title:"Printed shirt",
            descrption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, totam? Quasi dolores nesciunex praesentim"

        },
        {
            id:"3",
            img:image3,
            title:"Women shirt",
            descrption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, totam? Quasi dolores nesciunex praesentim"

        },
    ]
  return (
    <div>
      <div className='container'>
       {/*  heading section */}
       <div className='text-left mt-10  mb-24 max-auto '>
            <p data-aos="fade-up" className='text-primary'>Top-Rated Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div data-aos="zoom-in" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5 md:gap-3'>
            {productdata.map((data)=>(
                <div className='max-w-[300px] bg-white rounded-xl shadow-xl duration-high hover:bg-black/80 dark:hover:bg-primary relative group dark:bg-gray-800 flex flex-col border border-red-800  '>
                    <div key={data.id} className='h-[100] '>
                        <img className='max-w-[140px] drop-shadow-md transform -translate-y-20 group-hover:scale-105 duration-300 block translate-x-11' src={data.img}></img>
                    </div>
                        <div className='p-4 flex flex-col items-center'>
                            <div className='w-full flex items-center justify-center '>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                </div>
                                <h1 className='font-bold '>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 line-clamp-2'>{data.descrption}</p>
                                <div>
                                <button className='bg-primary  text-white rounded-full group-hover:bg-white group-hover:text-primary py-1 px-2 scale-105 mt-4 '>order now</button>

                                    </div>
                        </div>
                    </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Topsellingproducts
