"use client"
import PrivacyPolicy from '@/components/PrivacyPolicy';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <div className='bg-[#f7f3f0] text-black flex mx-8 md:mx-24 '>
            <PrivacyPolicy />
        </div>
    );
}

export default page