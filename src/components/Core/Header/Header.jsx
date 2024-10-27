import React, { useState } from 'react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className='flex justify-between my-2 max-w-[80rem] mx-auto py-4  '>
      <div className='w-60 h-16 hover:opacity-50'>
        <img src="public\images\cropped-ICVRSCET-1.png" alt='log' />
      </div>
      <div className='content-center'>
        <ul className='flex gap-9 text-white'>
          <li className=' hover:text-red-600 text-14'>
            <a href="#">HOME</a>
          </li>
          <li
            className='relative flex  hover:text-red-600 text-14'
            onMouseEnter={() => handleMouseEnter('about')}
        
          >
            <a href="">ABOUT US</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="size-4 mt-1.5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            {openDropdown === 'about' && (
              <div className='absolute bg-white text-black mt-10 p-4 w-44 text-base border-t-4 border-yellow-400'>
                <ul onMouseLeave={handleMouseLeave} className='text-left'>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm'>earlier conferences</a>
                  {/* <Link to="/about"></Link> */}
                  </li>
                  <li><a href="" className='block py-1 uppercase  hover:bg-slate-300 border-b-1 text-sm'>about the conference</a></li>
                  <li><a href="" className='block py-1 uppercase  hover:bg-slate-300 border-b-1 text-sm'>scope of conference</a></li>
                  <li><a href="" className='block py-1 uppercase  hover:bg-slate-300 border-b-1 text-sm'>about vrscet</a></li>
                  <li><a href="" className='block py-1 uppercase  hover:bg-slate-300 border-b-1 text-sm'>organizing committee</a></li>
                  <li><a href="" className='block py-1 uppercase  hover:bg-slate-300 border-b-1 text-sm'>editorial board</a></li>
                </ul>
              </div>
            )}
          </li>
          <li
            className='relative flex  hover:text-red-600 text-14'
            onMouseEnter={() => handleMouseEnter('authors')}
           
          >
            <a href="#">AUTHOR'S DESK</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="size-4 mt-1.5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            {openDropdown === 'authors' && (
              <div className='absolute bg-white text-black mt-10 p-4 w-44 text-base border-t-4 border-yellow-400'>
                <ul  onMouseLeave={handleMouseLeave}>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm '>conference tracks</a></li>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm'>journal publication</a></li>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm'>key dates</a></li>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm'>registration details</a></li>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm'>new paper submission</a></li>

                </ul>
              </div>
            )}
          </li>
          <li
            className='relative flex hover:text-red-600 text-14'
            onMouseEnter={() => handleMouseEnter('reach')}
          >
            <a href="">REACH US</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="size-4 mt-1.5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            {openDropdown === 'reach' && (
              <div className='absolute bg-white text-black mt-10 p-4 w-44 text-base border-t-4 border-yellow-400'>
                <ul onMouseLeave={handleMouseLeave}>
                  <li><a href="" className='block py-1 uppercase hover:bg-slate-300 border-b-1 text-sm'>contact us</a></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
