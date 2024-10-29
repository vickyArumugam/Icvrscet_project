import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter';
import AboutLocation from './AboutLocation';

const About_The_Conference = () => {
  return (
    <div>
      <AboutHeader />
      <div className=' w-auto flex items-center justify-center '>
        <div className='max-w-[42rem] h-auto font-roboto text-20 text-justify my-20 leading-loose'>
        The International Conference on Engineering Trends is a biennial conference which aims to provide high quality 
        research by bringing together researchers and practitioners from academia and industry. It is an international 
        forum to communicate and discuss various research findings, technological advancements and innovations in broad 
        areas of research like Advanced Computer Science and Information Technology. These emerging inter disciplinary research 
        areas have helped to solve complex problems and gained prominent attention in recent years. This conference will highlight
         innovative research directions, novel applications in design, analysis and modeling of the aforementioned key areas. This 
         conference will be an ideal platform for the researchers to exchange and share innovative ideas, experience, challenges and
          establish research relations worldwide.
        </div>
        </div>
        <AboutLocation/>
      <AboutFooter />
    </div>
  )
}

export default About_The_Conference
