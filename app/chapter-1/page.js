// 'use-client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const page = () => {
  return (
    <>
    <div className='flex flex-row shadow-md shadow-black mb-6 p-2'>
        <Link href="../" className='text-black'><AiOutlineArrowLeft size={50} className=' float-left'></AiOutlineArrowLeft></Link>
        <div className='flex flex-row space-x-4 ml-auto px-4'>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                English
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                हिंदी  
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                मराठी
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                తెలుగు
            </button>
        </div>
    </div>
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
    <iframe width="887" height="499" src="https://www.youtube.com/embed/VYlTI0RuPlI" title="animation 1 final" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </>
  )
}

export default page