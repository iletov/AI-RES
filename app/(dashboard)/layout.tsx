import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription'
import React from 'react'

const DashaboardLayouts = async ({children}: {children: React.ReactNode}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()
  
  return (
    <div className='h-full relative'>
      {/* SIDEBAR */}
      <div 
        className="
          hidden h-full 
          md:flex md:w-72 md:flex-col md:fixed md:inset-y-0"
          >
            <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>

      {/* RIGHT SIDE */}
      <main className='md:pl-72'>
        <Navbar/>
        {children}
      </main>
    </div>
  )
}

export default DashaboardLayouts