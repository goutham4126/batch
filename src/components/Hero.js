import React from 'react'
import { RiVideoLine } from "react-icons/ri";
import Image from 'next/image';
function Hero() {
  return (
        <div className="flex h-screen items-center justify-between p-4">
            <div className="lg:flex-1 pr-4 lg:mt-52"> 
                <Image src="https://i.postimg.cc/sxVhYCsB/Star-1.png" width={64} height={64} alt="" className="lg:block hidden absolute top-28 left-10"/>      
                <Image src="https://i.postimg.cc/sxVhYCsB/Star-1.png" width={48} height={48} alt="" className="lg:block hidden absolute top-16 right-20"/>      
                <h1 className="text-3xl lg:text-5xl lg:text-left font-bold">Make The Best Financial Decisions</h1>
                <p className="mt-5 font-medium">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <div className="my-6 flex gap-8 items-center">
                    <button className="bg-black text-white rounded-md p-3 text-sm font-medium">Get Started</button>
                    <button className="text-sm font-medium flex gap-2"><RiVideoLine className="h-5 w-5 "/> Watch Video</button>
                </div>
                <Image src="https://i.postimg.cc/sxVhYCsB/Star-1.png" alt="" width={40} height={40} className="lg:block hidden absolute left-60 mt-10"/> 
                <Image src="https://i.postimg.cc/sxVhYCsB/Star-1.png" alt="" width={40} height={40} className="lg:block hidden absolute right-96 mt-44"/>           
                <Image height={200} width={500} src="https://i.postimg.cc/8PkzVQxF/Group-35924.png" alt="" className="lg:pr-10"/>
            </div>
            <div className="lg:flex-1">
                <div className="mt-[100px] lg:block hidden">
                    <Image height={400} width={500} src="https://i.postimg.cc/L5jPSzjL/Ellipse-2156.png" alt="Logo" className="-mb-[500px]"/>
                    <Image height={400} width={500} src="https://i.postimg.cc/L5jPSzjL/Ellipse-2156.png" alt="Logo" className="-mb-[500px]"/>
                    <Image height={400} width={500} src="https://i.postimg.cc/L5jPSzjL/Ellipse-2156.png" alt="Logo" className="-mb-[1000px]"/>
                </div>
                <div className="hidden lg:flex flex-row items-center mt-[450px]">
                    <Image height={1000} width={500} src="https://i.postimg.cc/7YNQD08V/i-Phone-13-Pro-Front-1.png" alt="image" className="h-[620px] relative right-16 z-50"/>
                    <Image height={1000} width={500} src="https://i.postimg.cc/fRNZqx7f/i-Phone-13-Pro-Front.png" alt="image" className="h-[620px] relative right-[440px] top-16 z-20"/>
                    <Image height={1000} width={500} src="https://i.postimg.cc/7YNQD08V/i-Phone-13-Pro-Front-1.png" alt="image" className="h-[620px] relative top-28 right-[820px] z-0"/>
                </div>
            </div>
        </div>
  )
}

export default Hero