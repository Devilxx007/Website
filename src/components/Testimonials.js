import React from 'react'

const Testimonials = (props) => {
  return (
<div className="flex flex-col md:flex-row max-w-2xl hover:scale-105">
    <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
        <p> {props.desc}
        </p>
        <div className='mt-5 flex items-center'>
            <img src= {props.img} className='rounded-full' />
            <div className="ml-3">
                <h3 className="font-semibold"> {props.name} </h3>
                <p className="text-gray-500"> {props.title} </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials
