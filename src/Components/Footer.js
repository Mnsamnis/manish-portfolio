import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#faf4eb] text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} | Made with ❤️ by You Manish Kumar
      </p>
    </footer>
  );
};

export default Footer;