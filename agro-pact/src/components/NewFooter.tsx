import React from 'react'
import Image from 'next/image'

const NewFooter = () => {
    return (
        <div className='pt-5 px-5 rounded-3xl uppercase flex flex-col justify-between grow w-full bg-[#008165] min-h-fit'>
            <div className='h-auto w-full py-6'>
                <Image src="./footer_img.svg" className='h-fit w-full items-center hidden lg:block' width={24} height={24} alt="" />
                <Image src="./mobile_footer_img.svg" className='h-fit w-full items-center md:hidden' width={24} height={24} alt="" />
            </div>
        </div>
    )
}



export default NewFooter