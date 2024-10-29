// src/pages/ConferenceTracks.jsx
import React from 'react';
import AboutHeader from './AboutHeader';
import AboutFooter from './AboutFooter';


const ConferenceTracks = () => {
  return (
    <div>
      <AboutHeader/>
      <section>
        <div>
          <h1 className='text-center font-bold text-25 mt-24'>
          First International Conference on Modern Research in <br />Engineering Science and Technology <br />
          (ICMREST-2018)
          </h1>
          <p className='text-center text-lg'>conducted on 7th April, 2018 at V.R.S. College of Engineering and Technology, Arasur - 607 <br />107,  Villupuram District.
          </p>
          <hr className=' max-w-[46rem] h-1 bg-black border-0 my-5 ml-[584px]'></hr>
          <div className='flex justify-center items-center flex-col'>
          <img src="/images/ICMREST.jpg" alt="image"  className='w-[740px] h-[500px]'/>
          </div>
        </div>
        <div>
          <h1 className='text-center font-bold text-25 mt-24 '>
          Second International Conference on Veracity Research in  <br />Scientific Computation and Engineering Trends<br />
          (ICVRSCET-2019)
          </h1>
          <p className='text-center text-lg'>Inaugurated by Dr. Gunasekaran Manogaran, Big Data Scientist, University of California,<br /> Davis, USA, on 23rd March 2019.
          </p>
          <hr className=' max-w-[46rem] h-1 bg-black border-0 my-5 ml-[584px]'></hr>
          <div className='flex justify-center items-center flex-col'>
          <img src="/images/ICMREST.jpg" alt="image"  className='w-[740px] h-[500px] mb-20'/>
          </div>
        </div>
      </section>
      <AboutFooter/>
     
    </div>
  );
};

export default ConferenceTracks;
