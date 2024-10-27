import React from 'react'
import Header from '../Core/Header/Header'

const Home = () => {
    return (
        <>
            <section className="w-full h-screen relative ">
                <div className="relative bg-cover -mt-10 text-white text-center h-auto bg-[url('public/images/home-bg.jpg')] ">
                    <Header />
                    <div className='max-w-full mx-auto mt-40 '>
                        <h1 className='text-54  font-bold font-Helvetica'>5<sup>th</sup> International Conference</h1>
                        <span className="text-40 h-20 text-custom-yellow font-medium font-Helvetica animate-fade-up ">
                            on Veracity Research in Scientific Computing and Engineering Trends
                        </span>
                        <h2 className='text-50 font-medium font-Helvetica'>26<sup>th</sup>April, 2024</h2>
                        <h1 className='text-50  mb-4 font-bold font-Helvetica'>ICVRSCET - 2024 (Hybrid)</h1>
                        <button className='uppercase w-52 h-12 mb-60 bg-btn-bg border-1 font-medium border-white hover:bg-red-900 animate-fade-up'>Register here</button>
                    </div>
                </div>
            </section>
            <section className='w-100% flex flex-col justify-center items-center'>
                <div className='mb-10'>
                    <h1 className='text-white text-3xl font-semibold text-center font-roboto font-29'>About the Conference</h1>
                </div>
                <div className='w-6/12 mb-20'>
                    <h1 className='text-white text-2xl font-thin text-justify '>
                        The International Conference on Engineering Trends is a biennial conference which aims to provide high quality research by
                        bringing together researchers and practitioners from academia and industry. It is an international forum to communicate and
                        discuss various research findings, technological advancements and innovations in broad areas of research like Advanced Computer
                        Science and Information Technology. These emerging inter disciplinary research areas have helped to solve complex problems and gained
                        prominent attention in recent years. This conference will highlight innovative research directions, novel applications in design,
                        analysis and modeling of the aforementioned key areas. This conference will be an ideal platform for the researchers to exchange
                        and share innovative ideas, experience, challenges and establish research relations worldwide.
                    </h1>
                </div>
            </section>
            <section className="  w-full h-auto bg-cover  text-black text-center  flex flex-col gap-10 justify-center items-center bg-[url('public/images/home-bg.jpg')] ">
                <div>
                    <h1 className='text-5xl font-bold text-custom-yellow tracking-widest mt-10 font-montserrat-subrayada'>KEY DATES</h1>
                </div>
                <div className='flex gap-4 mb-20 '>
                    <div class=" w-60  min-h-72 flex flex-col bg-white border shadow-sm p-1 justify-center items-center text-center    bg-[url('public/images/002041.jpg')] bg-fill border-none bg-left-bottom">
                        <div className='max-h-62'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-16 h-16 text-center ml-20 mb-5 ">
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5
                             9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                            </svg>
                            <h1 className=' font-roboto text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                            <hr className='w-2/4 border-gray-500 ml-14 my-5'></hr>
                            <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
                        </div>
                    </div>
                    <div class=" w-60  min-h-72 flex flex-col bg-white border shadow-sm p-1 justify-center items-center text-center bg-[url('public/images/002031.jpg')] bg-fill border-none bg-left-bottom">
                        <div className='max-h-62'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-16 h-16 text-center ml-20 mb-5 ">
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5
                             9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                            </svg>
                            <h1 className=' font-roboto text-20 text-center font-bold'>Notification of Paper Acceptance</h1>
                            <hr className='w-2/4 border-gray-500 ml-14 my-5'></hr>
                            <h1 className=' font-roboto text-20 text-center font-bold'>18‐04‐2024</h1>
                        </div>
                    </div>

                    <div class=" w-60  min-h-72 flex flex-col bg-white border shadow-sm p-1 justify-center items-center text-center  bg-[url('public/images/002041.jpg')] bg-fill border-none bg-left-bottom">
                        <div className='max-h-62'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-16 h-16 text-center ml-20 mb-5 ">
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5
                             9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                            </svg>
                            <h1 className=' font-roboto text-20 text-center font-bold'>Camera Ready Paper Submission</h1>
                            <hr className='w-2/4 border-gray-500 ml-14 my-5'></hr>
                            <h1 className=' font-roboto text-20 text-center font-bold'>20‐04‐2024</h1>
                        </div>
                    </div>

                    <div class=" w-60  min-h-72 flex flex-col bg-white border shadow-sm p-1 justify-center items-center text-center bg-[url('public/images/002031.jpg')] bg-fill border-none bg-left-bottom">
                        <div className='max-h-62'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-16 h-16 text-center ml-20 mb-5">
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5
                             9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                            </svg>
                            <h1 className=' font-roboto text-20 text-center font-bold'>Last Date for Registration / Payment</h1>
                            <hr className='w-2/4 border-gray-500 ml-14 my-5'></hr>
                            <h1 className=' font-roboto text-20 text-center font-bold'>22‐04‐2024</h1>
                        </div>
                    </div>

                </div>
            </section>
            <section className=' w-full flex flex-col gap-10 justify-center items-center  '>
                <div>
                    <h1 className='text-4xl text-white tracking-widest mt-10 font-montserrat-subrayada'>Key Invitees</h1>
                </div>
                <div className=' flex justify-center items-center gap-4 mb-20'>
                    <div class=" w-full mt-10  min-h-80 flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm  p-10">
                        <img src="public\images\download-1-2048x2048.png" className='w-60 ' />
                        <h1 className=' text-20 text-center font-bold'>Mr. Thirumal Margabandu</h1>
                        <h1 className='text-center text-17'>Software Test & Digital Transformation Consultant, Maargam IT, London, UK.</h1>
                    </div>
                </div>
            </section>

            <section className=' w-full flex flex-col  text-white gap-10 justify-center items-center bg-red-600 '>
                <div>
                    <h1 className='text-4xl font-bold text-white tracking-widest mt-10 font-montserrat-subrayada '>Chief Patrons</h1>
                </div>
                <div className='w-2/ grid grid-cols-1 md:grid-cols-2 gap-4 mb-10'>
                    <div class=" w-[580px] h-80  flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm  bg-[url('public/images/002051.jpg')] bg-fill ">
                        <img src="public\images\chair.png" className=' ' />
                        <h1 className=' text-2xl text-center font-bold'>Tmt. Vijaya Muthuvannan</h1>
                        <hr className='w-56 h-1 bg-white border-0 my-2'></hr>
                        <h1 className='text-center font-roboto text-20'>Former Chairperson</h1>
                    </div>
                    <div class=" w-[580px] h-80  flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm  bg-[url('public/images/002051.jpg')] bg-fill ">
                        <img src="public\images\direc.png" className=' ' />
                        <h1 className=' text-2xl text-center font-bold'>Tmt.N.Muthuvannan</h1>
                        <hr className='w-56 h-1 bg-white border-0 my-2'></hr>
                        <h1 className='text-center font-roboto text-20'>Former Director</h1>
                    </div>
                    <div class=" w-[580px] h-80  flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm  bg-[url('public/images/002051.jpg')] bg-fill ">
                        <img src="public\images\ceo.png" className=' ' />
                        <h1 className=' text-2xl text-center font-bold'>Er.Ln. M. Saravanan, M.E.,</h1>
                        <hr className='w-56 h-1 bg-white border-0 my-2'></hr>
                        <h1 className='text-center font-roboto text-20'>Chairman</h1>
                    </div>
                    <div class="w-[580px] h-80  flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm  bg-[url('public/images/002051.jpg')] bg-fill ">
                        <img src="public\images\secret.png" className=' ' />
                        <h1 className=' text-2xl text-center font-bold'>Rtn.Thiru.S.R.Ramanathan</h1>
                        <hr className='w-56 h-1 bg-white border-0 my-2'></hr>
                        <h1 className='text-center font-roboto text-20'>Secretary & Correspondent</h1>
                    </div>

                    {/*<div className="w-[480px] h-80 flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm bg-[url('public/images/002051.jpg')] bg-fill">
      <img src="public/images/chair.png" className='' alt="Chair" />
      <h1 className='text-2xl text-center font-bold'>Tmt. Vijaya Muthuvannan</h1>
      <hr className='w-2/4 border-gray-500 my-5'></hr>
      <h1 className='text-center'>Former Chairperson</h1>
    </div>  */}
                    {/* </div> */}
                </div>
            </section>
            <section className='flex justify-center items-center gap-3 my-24 '>
                <div class=" w-60 h-340  text-center justify-center  items-center flex flex-col bg-white border shadow-sm  rounded-xl  bg-[url('public/images/002031.jpg')] bg-fill border-none">
                <h3 className='font-roboto text-20 text-center font-bold'>Academicians</h3>
                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                <h1 className='font-roboto text-85 text-center font-bold'>1</h1>
                <button className='uppercase w-40 rounded-lg h-10 text-white bg-black font-medium '>Register here</button>
                </div>
                <div class=" w-60 h-340 justify-center  items-center flex flex-col bg-white border shadow-sm  rounded-xl  bg-[url('public/images/002041.jpg')] bg-fill border-none">
                <h3 className='font-roboto text-20 text-center font-bold'>Students & PG/Ph.D Scholar</h3>
                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                <h1 className='font-roboto text-85 text-center font-bold'>1</h1>
                <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium '>Register here</button>
                </div>
                <div class=" w-60 h-340 justify-center  items-center flex flex-col bg-white border shadow-sm  rounded-xl bg-[url('public/images/002031.jpg')] bg-fill border-none">
                <h3 className='font-roboto text-20 text-center font-bold'>Industry Delegates</h3>
                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                <h1 className='font-roboto text-85 text-center font-bold'>1</h1>
                <button className='uppercase w-40 rounded-lg h-10 text-white bg-black font-medium '>Register here</button>
                </div>
                <div class=" w-60 h-340 justify-center  items-center flex flex-col bg-white border shadow-sm  rounded-xl bg-[url('public/images/002041.jpg')] bg-fill border-none">
                <h3 className='font-roboto text-20 text-center font-bold'>Overseas Delegates</h3>
                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                <h1 className='font-roboto text-85 text-center font-bold'>1</h1>
                <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium '>Register here</button>
                </div>

            </section>
            <section className='text-center mt-36'>
                <h1 className='text-4xl text-white font-bold my-10 font-montserrat-subrayada'>Contact Us</h1>
                <h2 className='text-4xl text-white font-bold'>V.R.S. College of Engineering & Technology,</h2>
                <h3 className='text-2xl text-white my-6 font-roboto'>(Reaccredited by NAAC and An ISO 9001:2008 Recertified Institution)</h3>
                <h1 className='text-2xl text-white mb-14 font-roboto'>Arasur - 607 107,
                    <br />
                    Villupuram District
                    <br />
                    Mobile : +91 8870301652
                    <br />
                    Email ID : icvrscet@gmail.com
                </h1>
            </section>
            <section>
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52538.87974771864!2d79.41420418992182!3d11.836981751948784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54ab06a0d742d3%3A0xeabe40e3ddd35f48!2sVRS%20College%20Of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1729960808177!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="shadow-lg w-full h-96"
                    />
                </div>
            </section>
            <section className='mt-10'>
                <div className='flex justify-center items-center gap-5'>
                    <img src="public\images\facebook_5968764 (1).png" alt='facebook-icon' className='transform transition-transform duration-200 hover:scale-110' />
                    <img src="public\images\twitter_3955031.png" alt="twitter-icon" className='transform transition-transform duration-200 hover:scale-110' />
                    <img src="public\images\instagram_1384015.png" alt="insta-icon" className='transform transition-transform duration-200 hover:scale-110' />
                    <img src="public\images\social_15707814.png" alt="youtube-icon" className='transform transition-transform duration-200 hover:scale-110' />
                </div>
                <div className='bg-footer-bg p-2 mt-10 text-footer-text  text-center'>
                    Copyright 2024 - V.R.S. College of Engineering and Technology
                </div>
            </section>
        </>

    )
}

export default Home
