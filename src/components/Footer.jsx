// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFA500] text-black p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-2xl text-white font-bold mb-4">About Us</h2>
            <p className="text-sm">
              We are here to help you to undderstand abut your feelings.
            </p>
          </div>
          {/* Add other footer content or links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
