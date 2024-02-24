"use client"
import React, { useState, useEffect } from 'react'
import '@babel/polyfill';
import VoiceAssisstant from '../../_components/VoiceAssisstant'
import { getCourseList } from '../../../../../_services/index'


const page = ({params}) => {
  const [active, setActive]= useState();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth
  });

  useEffect(()=>{
    getCourses()
  },[])

  const id =params.chapterId;
  const chname = params.courseName;

  const [courses,setCourses] = useState([])
  
  const getCourses = ()=>{
    getCourseList().then(res=>{
    
      setCourses(res.courseLists)
    })
  }

  const course = courses.find((item)=>item.id==id)
  // const ch = course.chapter;
  const ch =course?.chapter

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    console.log(screenSize)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(ch?.youtubeUrl)

  return (
    <div>
        <button className={`fixed bottom-4 right-4 ${active ? 'hidden':''} bg-blue-400 p-4 rounded-md`} onClick={()=>setActive(!active)}>Doubt?</button>
        <div className={`${active ? '' : 'hidden'}`}>
        <VoiceAssisstant />
        </div>
        
        <div className='-ml-64 md:ml-0'>
          <iframe width={`${screenSize.width>780 ? '650':'350'}`} height={`${screenSize.width>780 ? '480':'250'}`} src={`${ch?.youtubeUrl}`} title="CBSE Class 11 || Physics || Gravitation || Animation || in English @digitalguruji3147" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        </div>

        <div className='mt-16 w-screen md:w-1/2 -ml-56 md:ml-0'>
          {/* <div className='py-4'>
            1. Video 1
          </div>
          <hr/>
          <div className='py-4'>
            1. Video 1
          </div>
          <hr/>
          <div className='py-4'>
            1. Video 1
          </div> */}
          <h2 className='text-bold'>Description</h2>

          <hr/>
          <p className='pt-8'>{course?.description}</p>
        </div>
    </div>
    
  )
}

export default page