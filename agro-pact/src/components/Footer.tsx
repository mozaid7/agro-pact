import React from 'react'

const Footer = () => {
  return (
    <section className='h-auto w-full bg-[#1e1b19] text-white rounded-3xl'>
      <div className='p-12'>
        
        <div className='grid grid-cols-4 *:w-fit *:h-auto'>
          <div className=''>
          <h1>Company</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quia distinctio et sint? Quod corrupti, est temporibus obcaecati quasi rem sit at quidem debitis odit perferendis voluptatem a labore repellendus?</p>
          </div>
          <div className='items-center justify-center flex flex-col mx-auto'>
            <h1>Services</h1>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
              </ul>
          </div>
          <div className='items-center justify-center flex flex-col mx-auto'>
            <h1>Company</h1>
            <ul>
              <li>Cases</li>
              <li>Our Resources</li>
              <li>About Us</li>
              </ul>
          </div>
          <div className='items-center justify-center flex flex-col mx-auto'>
            <h1>Contact Information</h1>
            <ul>
              <li>email</li>
              <li>phone</li>
              </ul>
          </div>
        </div>
        <div></div>
      <div className='bg-zinc-700 h-[1px] w-full my-4'></div>
      </div>

    </section>
  )
}

export default Footer