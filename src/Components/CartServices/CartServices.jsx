import React from 'react'

export const CartServices = ({ service, image, alt }) => {
  return (
    <div className='sticky z-0 w-52 flex flex-col items-center hover:-translate-y-2 hover: duration-500 hover: cursor-pointer my-4 md:m-6'>
        <div className='p-4 px-8 border-2 border-black rounded-t-3xl border-b-0'>
            <img src={image} alt={alt}/>
        </div>
        <div className='w-full bg-teal-500 flex justify-center p-4 border-2 border-black rounded-b-3xl'>
            <p>
                {service}
            </p>
        </div>
    </div>
  )
}