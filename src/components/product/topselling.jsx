import React from 'react'
import image1 from '../../assets/product/women 1.png'
import image2 from '../../assets/product/women2.jpg'
import image3 from '../../assets/product/women3.jpg'
import image4 from '../../assets/product/women4.jpg'
import { FaStar } from 'react-icons/fa6'

const Topselling = () => {
    const sellingdata=[
        {
            id: 1,
            img: image1,
            title: "Women Ethnic",
            rating: 5.0,
            color: "white",
            aosDelay: "0",
          },
          {
            id: 2,
            img: image2,
            title: "Women western",
            rating: 4.5,
            color: "Red",
            aosDelay: "200",
          },
          {
            id: 3,
            img: image3,
            title: "Goggles",
            rating: 4.7,
            color: "brown",
            aosDelay: "400",
          },
          {
            id: 4,
            img: image4,
            title: "Printed T-Shirt",
            rating: 4.4,
            color: "Yellow",
            aosDelay: "600",
          },
          {
            id: 5,
            img: image1,
            title: "Fashin T-Shirt",
            rating: 4.5,
            color: "Pink",
            aosDelay: "800",
          },
    ]
  return (
    <div>
      <div classname="container">
        <div className='text-center mt-10  mb-10 max-auto '>
            <p data-aos="fade-up" className='text-primary'>Top-Selling Products For you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div >
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {sellingdata.map((data)=>(
                    <div className='space-y-2'>
                        <img data-aos="fade-up" data-aos-delay={data.aosDelay} className='h-[220px] w-[120px] object-cover rounded-md' src={data.img} alt={data.title}></img>
                        <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p className='text-sm text-gray-600'>{data.color}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-500'/>
                            <span>{data.rating}</span>
                            </div>
                    </div>
                    
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topselling
