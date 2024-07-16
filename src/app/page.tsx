'use client'
import { useGetExpertsQuery } from '@/rtkquery/chatapis'
import React from 'react'

function Home() {
  const {data} = useGetExpertsQuery({})
  console.log('data: ', data);
  return (
    <>
    <div className='px-10'>
      <div className='flex flex-col'>
        <div className='text-4xl font-normal font-display ' style={{ color: '#455166' }}>
          <h1>Hello, John</h1>
        </div>
        <div className='text-4xl font-medium font-display'>
        How can I help you today?
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
