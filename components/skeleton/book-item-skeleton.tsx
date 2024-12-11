import React from 'react'

const BookItemSkeleton = () => {
  return (
    <div className="flex gap-4 py-5 px-[10px] border-b border-gray-300">
      <div className='w-[80px] h-[105px] bg-gray-200'></div>
      <div className='flex-1'>
        <div className='w-full h-5 bg-gray-200'></div>
        <div className='w-full h-5 bg-gray-200'></div>
        <br />
        <div className='w-full h-5 bg-gray-200'></div>
      </div>
    </div>
  )
}

export default BookItemSkeleton