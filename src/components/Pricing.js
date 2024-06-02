import React from 'react'
import { TiTick } from "react-icons/ti";

function Pricing() {
  return (
    <section className="text-gray-600">
      <div className="container px-5 pb-5 lg:mt-6 mx-auto">
        <div className="flex justify-center items-center gap-5 mb-10">
          <h1 className="sm:text-4xl text-3xl font-bold mb-2 text-gray-900">Pricing</h1>
          <button className="py-3 px-5 bg-orange-500 text-white rounded">Monthly</button>
        </div>
        <div className="relative">
        <img src="https://i.postimg.cc/sxVhYCsB/Star-1.png" alt="" className="lg:block hidden absolute -left-20 h-12 w-12"/> 
        <img src="https://i.postimg.cc/sxVhYCsB/Star-1.png" alt="" className="lg:block hidden absolute -top-44 -right-20 h-10 w-10"/> 
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3 w-full">
            <div className="h-full p-6 border-2 border-black flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
              <p className="flex items-center text-gray-600 mb-2">
                <TiTick className="mr-1 h-5 w-5"/>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <TiTick className="mr-1 h-5 w-5"/>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-black py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button</button>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden">
              <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$38</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
              <TiTick className="mr-1 h-5 w-5"/>Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2">
              <TiTick className="mr-1 h-5 w-5"/>Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-6">
              <TiTick className="mr-1 h-5 w-5"/>Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-400 rounded">Button
              </button>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-black flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$56</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
              <TiTick className="mr-1 h-5 w-5"/>Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2">
              <TiTick className="mr-1 h-5 w-5"/>Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2">
              <TiTick className="mr-1 h-5 w-5"/>Hexagon neutra unicorn
              </p>
              <p className="flex items-center text-gray-600 mb-6">
              <TiTick className="mr-1 h-5 w-5"/>Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing