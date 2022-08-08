import React from 'react'

function SiteBanner() {
  return (
    <div className='mt-10 px-4'>
        <div className='sm:text-center lg:text-left'>
            <h1 className='tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl'>
                <span className='block'>Buy for your kids</span>
                <span className='block text-green-500'>Free delivery</span>
            </h1>
            <p className='mt-3 text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center'>
               <div className='md:m-3'>
                <a className='flex justify-center rounded-md bg-green-500 text-white px-8 py-3'>
                    Buy Now 
                </a>
               </div>
               <div className='md:m-3'>
                <a className='flex justify-center rounded-md bg-green-200 text-green-500 px-8 py-3'>
                    Explore
                </a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SiteBanner