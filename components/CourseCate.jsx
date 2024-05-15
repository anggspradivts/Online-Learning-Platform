import React from 'react'
import { filterCourse } from "/data/course"

const CourseCate = () => {
  const data = filterCourse;
  const filterCard = data.map((data, index) => {
    return (
      <div key={index} className="flex justify-center items-center h-[100px] lg:h-[200px] bg-orange-100 text-xl font-bold">
        {data}
      </div>
    )
  })
  return (
    <div className='my-40'>
      <div className='text-center py-4'>
        <h1 className='font-bold text-3xl'>Top Category</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 mx-20 gap-5">
        {filterCard}
      </div>
      <div className='text-center my-40'>
        <h1 className='text-5xl font-bold'>Start Your Learning Journey Now</h1>
      </div>
      <div className='flex justify-center items-center'>
        <button className='p-5 bg-orange-400 border-2 border-black hover:bg-orange-200 w-36 font-bold'>Start</button>
      </div>
    </div>
  )
}

export default CourseCate