import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
      <div className="text-gray-600 body-font lg:-mt-28">
        <div className="container px-5 pb-16 mx-auto">
          <Image width={80} height={80} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHsJ0gRyl8LGr5W-V-dq3jKf-iUoOynafQ&s" className="h-20 w-20 hidden lg:block rounded-full relative top-[700px] left-32"/>
          <h1 className="text-sm font-medium text-gray-900 mb-2 text-center">TESTIMONIAL</h1>
          <h1 className="text-3xl font-bold text-gray-900 text-center">What Our Users<br/>Say About Us?</h1>
          <div className="relative">
            <Image src="https://i.postimg.cc/sxVhYCsB/Star-1.png" alt="" width={48} height={48} className="lg:block hidden absolute -left-20"/> 
            <Image src="https://i.postimg.cc/sxVhYCsB/Star-1.png" alt="" width={40} height={40} className="lg:block hidden absolute -top-44 -right-20"/> 
          </div>
          <Image width={80} height={80} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHsJ0gRyl8LGr5W-V-dq3jKf-iUoOynafQ&s" className="h-20 w-20 hidden lg:block rounded-full relative top-[260px] left-96"/>
          <div className="flex flex-wrap -m-4">
            <div className="hidden md:block p-4 md:w-1/2 w-full -mt-[250px]">
                <Image width={80} height={80} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHsJ0gRyl8LGr5W-V-dq3jKf-iUoOynafQ&s" className="h-20 w-20 hidden lg:block rounded-full relative top-80 -left-5"/>
                <Image width={160} height={160} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vAgLQ-YG784iOrvDMDtO-Spf37R7gN09hixLwEmKwmyiduiH5a2INoHI6sWTflRpEv0&usqp=CAU" className="h-40 w-40 rounded-full relative top-80 left-40"/>
                <div className="relative text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-[260px] left-[280px] rounded-full bg-red-500 h-12 w-12 p-3" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>
                <Image height={400} width={500} src="https://i.postimg.cc/L5jPSzjL/Ellipse-2156.png" alt="Logo" className="-mb-[420px]"/>
                <Image height={400} width={500} src="https://i.postimg.cc/L5jPSzjL/Ellipse-2156.png" alt="Logo" className="-mb-[430px]"/>
                <Image height={400} width={500} src="https://i.postimg.cc/L5jPSzjL/Ellipse-2156.png" alt="Logo"/>
            </div>
            <div className="p-4 md:w-1/2 w-full lg:mt-24 mt-5 mb-2">
                <h1 className="text-xl font-semibold">The best financial accounting app ever!</h1>
                <p className="text-sm mb-6">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                <a className="inline-flex items-center">
                  <Image width={48} height={48} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vAgLQ-YG784iOrvDMDtO-Spf37R7gN09hixLwEmKwmyiduiH5a2INoHI6sWTflRpEv0&usqp=CAU" className="h-12 w-12 bg-cover rounded-full flex-shrink-0 mr-2"/>
                  <Image width={36} height={36} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHsJ0gRyl8LGr5W-V-dq3jKf-iUoOynafQ&s" className="w-9 h-9 rounded-full flex-shrink-0 mr-2 bg-cover"/>
                  <Image width={36} height={36} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNyoc1iwsoGwa4xCXJrQClVWTU9ztaQQK4m-jeZ-HCkrNlI4cT5dUtQKgXphDkbgOlzw&usqp=CAU" className="w-9 h-9 rounded-full flex-shrink-0 mr-2 bg-cover"/>
                  <Image width={36} height={36} alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHsJ0gRyl8LGr5W-V-dq3jKf-iUoOynafQ&s" className="w-9 h-9 rounded-full flex-shrink-0 mr-2 bg-cover"/>
                </a>
                <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-gray-900">Nick Jones</span>
                 </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials