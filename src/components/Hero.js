import React from 'react'
import uni from '../images/Uni.jpg'
const Hero = () => {
  return (
    <div className="flex justify-between items-center py-10 lg:py-0 border-y border-black xl:border-hidden xl:rounded-xl dark:bg-gray-950">
    <div className="px-10 space-y-5 lg:py-6">
      <h1 className="text-6xl md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12">
        <span className=" decoration-black decoration-4 dark:text-white">
          Scholarships
          Abroad
        </span>{" "}
        
      </h1>
      <h2 className="w-9/12 font-bold dark:text-white text-3xl">
        Studying abroad just got easier.
      </h2>
      <button className="border border-black bg-white px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100 hover:text-blue-500 hover:bg-black">
        Explore
      </button>
    </div>
    <img
      className="flex h-96 w-100 rounded-md"
      src={uni}
      alt="Hero-Img"
    />
  </div>
  )
}
export default Hero
