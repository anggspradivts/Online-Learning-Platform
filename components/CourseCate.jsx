import React from 'react'
import { filterCourse } from "/data/course"

const CourseCate = () => {
  const data = filterCourse;
  const filterCard = data.map((data, index) => {
    return (
      <div key={index} className="flex justify-center items-center h-[100px] lg:h-[200px] bg-orange-100">
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
    </div>
  )
}

export default CourseCate