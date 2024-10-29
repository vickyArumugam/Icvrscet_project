import React from 'react'
import AboutHeader from './AboutHeader'
import AboutLocation from './AboutLocation'
import AboutFooter from './AboutFooter'

export default function Scope_Of_Conference() {
    return (
        <div>
            <AboutHeader />
            <section className=' w-auto  flex items-center justify-center'>
                <div className='max-w-[42rem] h-auto font-roboto text-20 text-justify my-20 leading-loose'>
                    The main objective of the “International Conference on Veracity Research in Scientific Computation and
                    Engineering Trends” is to provide an opportunity for academicians, research scholars and students to address
                    the issues and challenges in the latest developments of research and technologies. It facilitates the participants
                    to get knowledge on latest trends and technologies in the current competitive world.
                </div>
            </section>
            <AboutLocation />
            <AboutFooter />
        </div>
    )
}
