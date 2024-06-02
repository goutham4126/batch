"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-5 shadow-lg lg:shadow-none">
      <div className="flex items-center gap-8 justify-between w-full">
          <Image src="https://i.postimg.cc/7LD9dRdZ/Group.png" alt="Logo" className="h-7" height={25} width={100} />
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex gap-5 font-bold">
            <Link href="#" className="text-orange-500">Home</Link>
            <Link href="#">About us</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Features</Link>
          </nav>
          <button className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded-lg">
            Download
          </button>
        </div>
        <button className="lg:hidden text-black" onClick={toggleMenu}>
            <IoMdMenu className="h-6 w-6"/>
        </button>
      </div>

      {/* mobile screen */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
        <nav className="flex flex-col gap-4 font-bold">
          <Link href="#" className="text-orange-500">Home</Link>
          <Link href="#">About us</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Features</Link>
          <button className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded-lg">
            Download
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
