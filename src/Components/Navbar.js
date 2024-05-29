import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };
  useEffect(() => {
   const handleScroll = () => {
     const offset = window.scrollY;
     if (offset > 0) {
       setIsSticky(true);
     } else {
       setIsSticky(false);
     }
   };

   window.addEventListener('scroll', handleScroll);

   // Clean up the event listener
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

  return (
   <nav className={`shadow-xl bg-[#E1DACA] border-b ${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <h1 className="text-2xl font-bold">Manish Kumar</h1>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            <button onClick={() => scrollToSection('banner')} className="hover:text-[#8f6e58] hover:underline">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#8f6e58] hover:underline">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-[#8f6e58] hover:underline">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#8f6e58] hover:underline">Project</button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#] hover:text-[#8f6e58] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button onClick={() => scrollToSection('banner')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8f6e58] hover:bg-gray-100">Home</button>
          <button onClick={() => scrollToSection('about')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8f6e58] hover:bg-gray-100">About</button>
          <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8f6e58] hover:bg-gray-100">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8f6e58] hover:bg-gray-100">Project</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
