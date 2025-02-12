import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray text-xs'>More ways to:{' '}<span className='underline text-blue'>Find an Apple Store{' '}</span>or{' '}<span className='underline text-blue'>other retailer</span>{' '}near you. Or call <span className='underline text-blue'>000800 040 1966</span></p>
            </div>
            <div className='bg-neutral-700 my-5 w-full h-[1px]'/>
            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray text-xs'>Copyright @ 2025 Apple Inc. All rights reserved</p>
                <div className='flex'>
                    {
                        footerLinks.map((link, i)=>(
                            <p key={link} className='text-gray font-semibold text-xs'>{link}{
                                i!==footerLinks.length-1 && (<span className='mx-2'> | </span>)
                            }</p>
                        ))
                    }
                </div>
                <div className='flex'><p className='text-gray text-xs font-semibold'>India</p></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
