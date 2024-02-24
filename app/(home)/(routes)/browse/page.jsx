"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseList } from '../../../_services/index'
import { CourseList } from './_components/CourseList'
const Browse = () => {
  useEffect(()=>{
    getCourses()
  },[])

  const [courses,setCourses] = useState([])
  
  const getCourses = ()=>{
    getCourseList().then(res=>{
      console.log(res)
      setCourses(res.courseLists)
    })
  }
  return (
    <div className=''>
      <CategoryFilter />
      {courses ? <CourseList courses={courses}/> : 'Loading...'}
    </div>
  )
}

export default Browse