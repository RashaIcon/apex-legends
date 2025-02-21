import React from 'react'

const Card = () => {
  return (
                    <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-5 md:grid-rows-1 gap-2 md:gap-2 mt-11">
                      <div className="col-start-1 row-start-1 row-span-2 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-1 bg-[#EAECC6] text-[#A31621] rounded-md pt-2 px-2 pb-5 flex flex-col gap-y-3 items-center justify-center text-center">
                        <Image src={Ben1} alt="hero" width={0} height={0} />
                        <h1 className="font-bold font-pira text-4xl">
                          Discover Indonesia
                        </h1>
                        <p className=" text-[14px] font-medium">
                          "Discover Indonesia" helps you explore and plan your trip
                          across the archipelago. It features top destinations,
                          travel tips, and cultural highlights to enhance your
                          journey!
                        </p>
                        <div className="mt-5">
                          <p className="font-light text-lg font-pira">
                            Developed with:
                          </p>
                          <p>HTML, CSS & Javascript</p>
                        </div>
                      </div>
                      <div className="col-start-1 row-start-3 col-span-2 md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-2 rounded-md pt-2 px-2 pb-5 bg-[#EAECC6] text-[#A31621]">
                        <Image src={Ben2} alt="hero" width={0} height={0} />
                        <h1 className="font-bold font-pira text-4xl text-center">
                          Orebi
                        </h1>
                        <p className=" text-[14px] text-center font-medium">
                          This eCommerce website offers a seamless shopping
                          experience with a modern design and secure transactions.
                          Browse products, get exclusive deals, and shop
                          effortlessly from anywhere!
                        </p>
                        <p className="font-light text-lg font-pira">
                          Developed with:
                        </p>
                        <p>React, Tailwind & Redux</p>
                      </div>
                      <div className="col-start-2 row-start-2 col-span-2 md:col-start-2 md:row-start-0 md:col-span-1 md:row-span-1 bg-[#EAECC6] text-[#A31621] text-center rounded-md pt-2 px-2 pb-5 flex flex-col gap-y-5 ">
                        <Image
                          src={Ben3}
                          alt="hero"
                          width={0}
                          height={0}
                          className="h-[250px] object-cover"
                        />
                        <h1 className="font-bold font-pira text-4xl text-center">
                          Medical Functional
                        </h1>
                        <p className=" text-[14px] text-center font-medium">
                          This website lets you book doctor appointments online.
                          It's easy to use and has features like doctor profiles,
                          appointment reminders, and secure messaging.
                        </p>
    
                        <div className="mt-2">
                          <p className="font-light text-lg font-pira">
                            Developed with:
                          </p>
                          <p>HTML, CSS & Javascript</p>
                        </div>
                      </div>
                      <div className="col-start-2 row-start-2 col-span-2 md:col-start-2 md:row-start-0 md:col-span-1 md:row-span-2 bg-gray-300 rounded-md p-10">
                        3
                      </div>
                      <div className="hidden md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2 bg-gray-300 rounded-md p-10">
                        6
                      </div>
                    </div>
  )
}

export default Card