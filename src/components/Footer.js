import React from 'react'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
  <footer className="">
  <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-52 mx-auto text-center">
      <img src="https://i.postimg.cc/7LD9dRdZ/Group.png" alt="Logo" className="h-7" />
      <p className="mt-4 text-sm flex items-center gap-3"><MdMessage className="h-5 w-5"/> help@frybix.com</p>
      <p className="mt-4 text-sm flex items-center gap-3"><FaPhoneAlt className="h-4 w-4"/>+1 234 456 678 89</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Links</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Pricings</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Features</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Legal</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">terms of use</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">privacy policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">cookie policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Product</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">take tour</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">live chat</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">reveiws</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Newsletter</h2>
        <nav className="list-none mb-10">
          <li className="hover:bg-gray-800 bg-black p-2 text-white">
            Subscribe
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="border-t-2 border-gray-300">
    <p className="text-center font-medium text-sm p-5">Copyright 2022 uifry.com all rights reserved</p>
  </div>
</footer>
  )
}

export default Footer