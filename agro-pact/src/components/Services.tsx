import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineFileUpload, MdPublish } from "react-icons/md";
import { PiLeaf } from "react-icons/pi";
import { TbWorldDollar } from "react-icons/tb";

const Services = () => {
    return (
        <>

            <section className='relative h-auto w-full z-10 bg-[#ffffff] border-[#f3f1ec] border-8 rounded-3xl my-10 shadow-lg py-8'>
                <div className='grid gap-4 md:flex md:p-16 p-8 text-zinc-800'>
                    <h1 className='text-4xl md:text-5xl justify-start flex items-start md:w-1/2'>How it Works</h1>
                    <p className='md:w-1/2 text-sm md:text-base'>We aim to create an online marketplace that connects   farmers and
                        buyers for transparent, automated contract farming agreements. Using
                        blockchain technology, we ensure security, trust, and transparency
                        in every transaction.</p>
                </div>

                <div className='grid md:grid-rows-1 md:grid-cols-4 w-full *:h-auto px-6 *:rounded-3xl gap-4 *:border *:border-zinc-400 *:transition-all *:ease-in-out *:duration-300 *:px-4 *:py-10'>
                    <div className='hover:bg-[#27272a] hover:text-white flex flex-col'>
                        <div className=' bg-[#008165] text-white mr-auto p-2 rounded-2xl'>
                            <AiOutlineBulb className=' rounded-xl size-10' />
                        </div>
                        <h2 className='text-3xl py-6'>Create</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae repellendus debitis aspernatur dicta. e numquam?</p>
                    </div>
                    <div className='hover:bg-[#27272a] hover:text-white flex flex-col'>
                        <div className=' bg-[#008165] text-white mr-auto p-2 rounded-2xl'>
                            <MdOutlineFileUpload className=' rounded-xl size-10' />
                        </div>
                        <h2 className='text-3xl py-6'>Publish</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae repellendus debitis aspernatur dicta. e numquam?</p>
                    </div>
                    <div className='hover:bg-[#27272a] hover:text-white flex flex-col'>
                        <div className=' bg-[#008165] text-white mr-auto p-2 rounded-2xl'>
                            <PiLeaf className=' rounded-xl size-10' />
                        </div>
                        <h2 className='text-3xl py-6'>Grow</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae repellendus debitis aspernatur dicta. e numquam?</p>
                    </div>
                    <div className='hover:bg-[#27272a] hover:text-white flex flex-col'>
                        <div className=' bg-[#008165] text-white mr-auto p-2 rounded-2xl'>
                            <TbWorldDollar className=' rounded-xl size-10' />
                        </div>
                        <h2 className='text-3xl py-6'>Market</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae repellendus debitis aspernatur dicta. e numquam?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services