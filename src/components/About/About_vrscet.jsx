import React from 'react'
import AboutHeader from './AboutHeader'
import AboutLocation from './AboutLocation'
import AboutFooter from './AboutFooter'

export default function About_Vrscet() {
  return (
    <div>
        <AboutHeader/>
        
        <div className=' w-auto flex items-center justify-center '>
        <div className='max-w-[42rem] h-auto font-roboto text-20 text-justify my-20 leading-loose'>
        V.R.S. College of Engineering and Technology was established in the year 1994 under the aegis of S.P.S Educational Trust. 
        The college excels with the approval of All India Council for Technical Education, New Delhi, Affiliation of Anna University, 
        Chennai, Reaccreditation by NAAC, Bengaluru [earlier by NBA, New Delhi] and Recertification by ISO 9001 : 2008. It is managed 
        by the Board of Governors with Er.M.Saravanan as its Chairman and Mr.S.R. Ramanathan as the Secretary & Correspondent.
        Rapid dissemination of scientific principles and its vast exploitation through innovative inventions have triggered tremendous 
        impact on the socio-economic development of our Country. However, the needs of more resources and their meticulous contributions
         have become vital to face the confronting socio-economic behavior of our country. By inculcating the educational and professional 
         experience to the resources through innovative applied research, a well-developed economic structure can be established in our country. 
         Keeping this as a mission, VRSCET has been established in a rural area and provides intellectual and career oriented professional education
          through various disciplines. Known for its excellent infrastructure and facilities for learning, the college has consistently registered impressive 
          academic performance. A gateway to success, the college has set a longrange planning to enlarge and enrich its programmes and activities to empower
           the youth, who aspire to become successful Engineers, Scientists and Managers.

        </div>
        </div>
        <AboutLocation/>
        <AboutFooter/>
      
    </div>
  )
}
