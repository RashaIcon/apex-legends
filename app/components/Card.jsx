import React from 'react'
import Iso from "../../public/images/bentogrid/iso.png";
import Image from 'next/image';
import anime from "../../public/images/bentogrid/anime.png";
import cinema from "../../public/images/bentogrid/cinema.png";
import zizu from "../../public/images/bentogrid/zizu.png";
import good from "../../public/images/bentogrid/good.png";


const Card = () => {
  return (

    <>
        <div
    className="flex h-screen w-full flex-col   items-center justify-center rounded-lg  "
  >
    <div className="grid h-full w-full grid-cols-2 md:grid-cols-3 grid-rows-6 gap-4">
          <div className=" col-span-2  md:p-5 row-span-2   md:row-span-2 rounded-xl bg-[#FCF7F8] overflow-hidden ">
            <div className='flex  '>
              <Image src={Iso} width={0} height={0} className='iso mt-16 md:mt-0 scale-110 md:scale-100    w-[150px] md:w-auto object-contain' alt='asd'/>
              <div className='text-left'> 
                <h1 className='font-pira text-[#A31621] text-4xl mt-10 md:mt-6  md:text-6xl'>Competitive Gamer</h1>
                <p className='text-[#A31621] hidden md:block  w-[90%] mt-5 font-ox text-lg'>I thrive in competitive gaming, enjoying high-stakes matches and constantly pushing myself to improve. The challenge and strategy keep me engaged, and I love competing against skilled players.</p>
              </div>

            </div>

          </div>
          <div className="row-span-2 md:row-span-3 rounded-xl bg-[#FCF7F8] ">
            <div className='flex items-center justify-center  flex-col md:p-6  '>
              <Image src={zizu} width={0} height={0} className='dow  md:upin2 object-contain  md:scale-100 w-[90px] md:w-[200px]' alt='ada'/>
              <div className='text-center flex items-center justify-center flex-col mt-6'> 
                <h1 className='font-pira text-[#A31621] text-3xl  md:text-5xl '>Sports Enthusiast</h1>
                <p className=' hidden md:block  text-[#A31621]  mt-5 font-ox text-lg'>I love the excitement of sports, whether playing or watching. The competition, strategy, and energy keep me hooked!</p>
              </div>

            </div>
      </div>
          <div className="row-span-2 md:row-span-3 rounded-lg md:rounded-xl bg-[#FCF7F8]">
            <div className='flex items-center  flex-col mt-7  '>
              <Image src={anime} width={0} height={0} className='upin2 w-[350px] object-contain' alt='ada'/>
              <div className='text-center flex items-center justify-center flex-col m'> 
                <h1 className='font-pira  text-[#A31621] text-3xl md:text-5xl '>Animator <span className=' block md:hidden text-2xl'>Video Editor</span></h1>
                <p className='hidden md:block text-[#A31621] w-[90%] mt-2 font-ox text-lg'>I enjoy bringing ideas to life through motion, creating engaging and expressive animations.</p>
              </div>

            </div>
      </div>
          <div className="row-span-2 md:row-span-3 rounded-lg md:rounded-xl bg-[#FCF7F8]">
                        <div className='flex items-center  flex-col mt-7  '>
              <Image src={cinema} width={0} height={0} className='upin2 w-[350px] object-contain' alt='ada'/>
              <div className='text-center flex items-center justify-center flex-col mt-2'> 
                <h1 className='font-pira text-[#A31621] text-2xl md:text-5xl '>Cinematographer</h1>
                <p className='hidden md:block text-[#A31621] w-[90%] mt-2 font-ox text-lg'>I love capturing stories through visuals, using light, angles, and motion to create compelling scenes.</p>
              </div>

            </div>
      </div>
          <div className="row-span-2 md:row-span-2 rounded-lg md:rounded-xl   bg-[#FCF7F8]">
            <div className='flex flex-col justify-center mt-5'>
              <Image src={good} width={0} height={0} className='upin2 md:iso w-[80%] md:w-[50%] mx-auto object-contain' alt='ada'/>
              <div className='flex items-center justify-center flex-col mt-  '>
                <h1 className='font-pira text-[#A31621] text-2xl md:text-5xl  '>A Good Human!</h1>
              </div>

            </div>
      </div>
    </div>
  </div>
    </>
  )
}
// color pallete #FCF7F8 #A31621 #EAECC6
export default Card