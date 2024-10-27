import React from 'react'

const AboutFooter = () => {
    return (
        <div>
            <section className=" w-full h-96 bg-[url('/images/002031.jpg')] bg-about-footer bg-repeat bg-cover bg-center flex flex-col text-center justify-center">
                    <h3 className='text-about-text-col font-roboto text-20 font-bold tracking-[1em] uppercase'>Contact</h3>
                    <h1 className='text-about-text-col font-roboto text-50 font-extrabold my-5'>For any inquiries</h1>
                    <div className='w-full flex justify-evenly'>
                    <h1 className='text-about-text-col text-2xl font-roboto text-23 font-semibold'>Email ID : icvrscet@gmail.com</h1>
                    <h1 className='text-about-text-col text-2xl font-roboto text-23 font-semibold'>Mobile : +91 8870301652</h1>

                    </div>
                    
            </section>
            <div className='bg-footer-bg p-2 text-footer-text  text-center'>
                    Copyright 2024 - V.R.S. College of Engineering and Technology
                </div>

        </div>
    )
}

export default AboutFooter
