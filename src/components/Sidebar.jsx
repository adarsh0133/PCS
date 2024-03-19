import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const sidebarStyles = isSidebarOpen
    ? 'fixed w-1/2 right-0 h-screen transition-all sm:w-1/3 lg:hidden'
    : 'fixed w-1/2 -right-[50%] h-screen transition-all sm:w-1/3 lg:hidden';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleSidebar();
    }
  };

  return (
    <div className={`${sidebarStyles} p-5 flex flex-col justify-between z-10 bg-zinc-200`}>
      <div className="relative p-3 flex items-end justify-end">
        <i className="ri-close-line text-4xl absolute -right-2 top-2 text-zinc-900" onClick={toggleSidebar}></i>
      </div>
      <ul className='flex flex-col mb-36 gap-3 text-xl font-semibold'>
        <li><Link onClick={() => scrollToSection('home-section')}>Home</Link></li>
        <li><Link onClick={() => scrollToSection('about-section')}>About</Link></li>
        <li><Link onClick={() => scrollToSection('services-section')}>Our Service</Link></li>
        <li><Link onClick={() => scrollToSection('projects-section')}>Project Gallery</Link></li>
        <li><Link onClick={() => scrollToSection('testimonials-section')}>Testimonials</Link></li>
        <li><Link onClick={() => scrollToSection('contact-section')}>Contact Us</Link></li>
      </ul>
      <div className='h-[1px] bg-zinc-900'></div>
    </div>
  );
};

export default Sidebar;
