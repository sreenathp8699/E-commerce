import React, { useEffect, useState } from 'react'
import Sale from '../../assets/hero/sale.png'
import Shopping from '../../assets/hero/shopping.png'
import Women from '../../assets/hero/women.png'



const Heroslider = () => {
    const[currentindex,setcurrentindex]=useState(0);
    const productData = [
        {
          id: 1,
          img: Sale,
          title: "Upto 50% off on all Men's Wear",
          description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: Shopping,
          title: "30% off on all Women's Wear",
          description:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: Women,
          title: "70% off on all Products Sale",
          description:
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
       
      ];
    useEffect(()=>{
        const sliderinterval=setInterval(()=>{
            setcurrentindex((previndex)=>{
                if(previndex === productData.length -1 )
                    {
                        return 0;
                    }
                else{
                    return previndex + 1;
                } 
            })

        },3000)
        return () => clearInterval(sliderinterval)

    },[productData.length]) 

   
  return (
    <>
    <div className='relative w-full overflow-hidden'>
    <div data-aos="zoom-in" data-aos-once="true" className="flex transition-transform duration-300" style={{transform:`translateX(-${currentindex * (100/productData.length)}%)` , width: `${productData.length * 100}%`}}>
       {productData.map((product) => (
            <div key={product.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 relative left-34 z-10">
                  <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl lg:text-7xl sm:text-6xl font-bold">{product.title}</h1>
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">{product.description}</p>
                  <div data-aos="fade-up" data-aos-duration="500" data-ao-delay="300" >
                    <button className="bg-gradient-to-r from-primary to-secondary rounded-full py-2 px-4 text-white hover:scale-105">
                      order
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2 relative">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img
                      src={product.img}
                      className="w-[300px] h-[300px] small:w-[450px] small:h-[450px] small:scale-125 object-contain mx-auto sm:scale-105 lg:scale-120"
                      alt="women-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            
          ))}
          </div>
          </div>
    </>
  )
}

export default Heroslider;
