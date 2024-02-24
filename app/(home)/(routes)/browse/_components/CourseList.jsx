import React from 'react'

export const CourseList = ({courses}) => {
  return (
    // <div className='mt-5 grid grid-cols-3 gap-4'>
    //     {courses.map((item,index)=>(
            
    //         <div key={index} className='border shadow-md shadow-blue-200 cursor-pointer'>
    //         <a href={`/browse/${item.id}/${item.chapter.name}`}>
    //             <img src={item.banner} alt='' className='w-full'/>
    //             <p className='p-4'>{item.name}</p>
    //         </a>
    //         </div>

            
    //     ))}
    // </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white justify-between px-8 pt-8 -ml-64 md:ml-0">
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <a href="/browse/clsyamydh1ga907o91hshvpyg/Motion graphics"><img src="/v1.png" /></a>
                </div>
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <a href='/browse/clsy4wyyq1a8v07o9fk6um606/Statement-analysis'><img src="/v2.png" /></a>
                </div>
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <a href="/browse/clsw3xffg04ku07obojcgyagu/Gravitation"><img src="/v7.png" /></a>
                </div>
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <img src="/v4.png" />
                </div>
          
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <img src="/v5.png" />
                </div>
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <img src="/v6.png" />
                </div>
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <img src="/v1.png" />
                </div>
                <div className="shadow-lg hover:scale-105 cursor-pointer">
                  <img src="/v1.png" />
                </div>
          
    </div>
    
      
  )
}

export default CourseList