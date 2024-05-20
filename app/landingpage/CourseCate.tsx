import React from 'react'
import { filterCourse } from "@/data/course"
import Link from 'next/link'
import MyBtn from "@/components/MyBtn"

const CourseCate = () => {
  const data = filterCourse;

  const filterCard = data.map((data, index) => {
    return (
      <Link key={index} href={`/courses/category/${data}`}>
        <div className="flex justify-center items-center h-[100px] lg:h-[200px] bg-orange-100 text-xl font-bold hover:-translate-y-11 transition-all duration-300">
          {data}
        </div>
      </Link>
    )
  })
  
  return (
    <div className='my-40'>
      <div className='text-center my-20'>
        <h1 className='font-bold text-3xl'>Top Courses Category</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 mx-20 gap-5">
        {filterCard}
      </div>
      <div className='text-center my-40'>
        <h1 className='text-5xl font-bold'>Start Your Learning Journey Now</h1>
      </div>
      <div className='flex justify-center items-center'>
        <MyBtn name={"Start"}/>
      </div>
    </div>
  )
}

export default CourseCate