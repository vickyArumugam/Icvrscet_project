import React from 'react'

const AboutLocation = () => {
    return (
        <div>
            <section className='min-w-64 mt-10 bg-slate-300 w-full h-460 '>
                <div className='flex  justify-around g-10 text-center'>

                <div >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-64 text-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h1 className='text-23 font-roboto font-bold text-white'>WHERE</h1>
                        <div>
                            <h1 className='font-roboto text-20  text-white'>V.R.S. College of Engineering and Technology <br />
                                Arasur - 607 107 <br />
                                Villupuram District
                            </h1>
                        </div>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-64">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <h1 className='text-23 font-roboto font-bold text-white'>WHEN</h1>
                    <div>
                        <h1 className='font-roboto text-20  text-white'>26th April, 2024
                            <br />
                            (Friday)
                        </h1>
                    </div>
                </div>
                </div>
            </section>
            <button className='uppercase w-52 h-12 mb-60 bg-red-500 border-1 font-medium border-white hover:bg-btn-bg animate-fade-up'>Register here</button>


        </div>
    )
}

export default AboutLocation
