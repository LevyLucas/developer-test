import React from 'react';
import { textsButtons } from '../utils/texts.jsx';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between mt-5">
      <Link href="/">
        <img src="/logo.svg" alt="Logo" className="w-48 h-auto cursor-pointer" />
      </Link>
      <div className="flex items-center gap-12">
        <p className="font-mono text-white font-bold">{textsButtons.explore}</p>
        <div className="flex gap-3">
          <button className="font-mono p-4 rounded-lg bg-gray-800 text-gray-400 h-10 w-36 border border-gray-700 flex items-center justify-center">{textsButtons.signUp}</button>
          <button className="font-mono p-4 rounded-lg bg-violet-700 text-white h-10 w-36 border border-violet-500 flex items-center justify-center">{textsButtons.signIn}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
