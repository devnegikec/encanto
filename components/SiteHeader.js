import React from 'react'
import Link from 'next/link'

function SiteHeader() {
  return (
    <nav className='bg-white shadow-lg'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between'>
            <div className='flex spcae-x-7'>
              <a className='flex items-center' href="">
                <img className='w-20 h-20 mr-4' src="/logo.png" alt="Charakhee" />
                <span className='font-semibold text-gray-500 text-lg'>Charakhee</span>
              </a>
            </div>
            <div className='hidden mt-4 mb-4 md:flex border border-b-4 '>
              <input className='border-red-500' type='serach' placeholder='Search product ...' />
            </div>
            <div className='flex space-x-1 py-6'>
              <Link href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <Link href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default SiteHeader