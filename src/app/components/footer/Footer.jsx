import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto flex items-center justify-between text-white mt-14">
      <div className="container mx-auto px-11 py-8 flex justify-between items-start md:flex-row flex-col">
        <div className="flex flex-col max-w-xl">
          <img src="/logo.svg" alt="NFT Image" className="w-40" />
          <p className="mt-4 text-gray-400 text-sm font-mono tracking-wider">
            The home of long-form generative art. We are passionate about empowering artists to create on blockchain and giving collectors the peace of mind of tokenized, verifiable collectibles. Welcome to the New Frontier.
          </p>
          <span className="text-gray-400 text-xs mt-12 font-mono tracking-wider">
            ©2024 New Frontier Art, Inc. All Rights Reserved.
          </span>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <span className="font-bold font-mono text-xl tracking-wider mb-2">Account</span>
          <a href="/login" className="text-gray-400 text-sm hover:text-gray-200 font-mono">Login</a>
          <a href="/settings" className="text-gray-400 text-sm hover:text-gray-200 mt-2 font-mono">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
