import React from 'react'
import { BorderBeam } from './ui/border-beam'
import Safari from './ui/safari'

const DashboardScreenDemo = () => {
  return (
    <>
            {/*  */}
            <div className="min-h-screen">
                <div className="relative mt-6 mb-16 mx-4 md:mx-24 sm:mx-10 ">
                    <Safari url="agropact.com" src="./dashboard_demo.svg" className="size-full border-2 rounded-2xl border-white" />
                    <BorderBeam size={1000} duration={15} delay={9} className="rounded-xl " borderWidth={3.5} colorFrom="#008165" colorTo="#68b589" />
                </div>
            </div>
            {/* bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-600 via-green-400 to-green-200 */}
    </>
  )
}

export default DashboardScreenDemo