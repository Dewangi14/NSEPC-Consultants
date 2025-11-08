// import Counter from '@/components/animations/Counter'
// import React from 'react'

// const CounterNumbers = () => {
//   return (
//     <div className='bg-pink-50 text-[#061833] grid grid-cols-4 gap-5 p-10 items-center justify-center text-center'>
//         <div className='flex flex-col xl:gap-1'>

//             <div className='font-extrabold text-4xl xl:text-5xl'>

//             <Counter from={0} to={7} duration={2} />+

                

//             </div>

//             <div className='text-sm xl:text-base'>
//                 Countries Reached
//             </div>

//         </div>
//         <div className='flex flex-col xl:gap-1'>

//             <div className='font-extrabold text-4xl xl:text-5xl'>

//             <Counter from={0} to={100} duration={2} />+

//             </div>

//             <div className='text-sm xl:text-base'>
//                 Years of Cumulative Experience
//             </div>

//         </div>
//         <div className='flex flex-col xl:gap-1'>

//             <div className='font-extrabold text-4xl xl:text-5xl'>

//             <Counter from={0} to={115} duration={2} />+

//             </div>

//             <div className='text-sm xl:text-base'>
//                 Erection & Commissioning done
//             </div>

//         </div>
//         <div className='flex flex-col xl:gap-1'>

//             <div className='font-extrabold text-4xl xl:text-5xl'>

//             <Counter from={0} to={15} duration={2} />+

//             </div>

//             <div className='text-sm xl:text-base'>
//                 Years Completed
//             </div>

//         </div>
//     </div>
//   )
// }

// export default CounterNumbers

import Counter from '@/components/animations/Counter'
import React from 'react'

const CounterNumbers = () => {
  return (
    <div className='bg-pink-50 text-[#061833] grid grid-cols-2 lg:grid-cols-4 gap-5 p-10 items-start lg:items-center justify-center text-center'>
      
      <div className='flex flex-col xl:gap-1'>
        <div className='font-extrabold text-4xl xl:text-5xl'>
          <Counter from={0} to={7} duration={2} />+
        </div>
        <div className='text-sm xl:text-base'>
          Countries Reached
        </div>
      </div>

      <div className='flex flex-col xl:gap-1'>
        <div className='font-extrabold text-4xl xl:text-5xl'>
          <Counter from={0} to={100} duration={2} />+
        </div>
        <div className='text-sm xl:text-base'>
          Years of Cumulative Experience
        </div>
      </div>

      <div className='flex flex-col xl:gap-1'>
        <div className='font-extrabold text-4xl xl:text-5xl'>
          <Counter from={0} to={115} duration={2} />+
        </div>
        <div className='text-sm xl:text-base'>
          Erection & Commissioning done
        </div>
      </div>

      <div className='flex flex-col xl:gap-1'>
        <div className='font-extrabold text-4xl xl:text-5xl'>
          <Counter from={0} to={15} duration={2} />+
        </div>
        <div className='text-sm xl:text-base'>
          Years Completed
        </div>
      </div>

    </div>
  )
}

export default CounterNumbers
