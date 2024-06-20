import React from 'react'

export const Input = ({name,type,placeholder}) => {
  return (
    <>
    <label className='my-4 mx-9' >{name}</label>
    <input className='mx-9 p-3 rounded-xl border-solid border-2 border-gray-50r w-80 focus:outline-none focus:border-blue-border' type={type} placeholder={placeholder} />
    </>
  )
}