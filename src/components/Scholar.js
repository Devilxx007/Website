import React from 'react'

const Scholar = (props) => {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-90">
  <img className="w-full" src={props.img} alt="Img" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
      {props.desc}
    </p>
  </div>
</div>
    
    
  )
}

export default Scholar
