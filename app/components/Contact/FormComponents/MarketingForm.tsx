import React from 'react'

const MarketingForm = () => {
  return (
    <form className="mx-auto bg-[#E3DED9] md:px-6 px-0   py-0 md:py-8 text-black">
            <div className="grid grid-cols-2 gap-6">

                <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                    <input type="text" id="name" placeholder=" " className="block w-full focus:shadow-outline  border-b border-gray-400 focus:outline-none focus:border-black bg-transparent texthelvetica20 clr15op50 lg:pl-3    py-3 px-3   appearance-none leading-normal   " />
                    <label   className="absolute font-helvetica text-font20 text-[#15151550] top-3 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Name</label>
                </div>
                <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                    <input type="email" id="name" placeholder=" " className="block w-full focus:shadow-outline  border-b border-gray-400 focus:outline-none focus:border-black bg-transparent texthelvetica20 clr15op50 lg:pl-3    py-3 px-3   appearance-none leading-normal   " />
                    <label   className="absolute font-helvetica text-font20 text-[#15151550] top-3 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Email</label>
                </div>
            </div>

            <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                    <input type="text" id="name" placeholder=" " className="block w-full focus:shadow-outline   border-b border-gray-400 focus:outline-none focus:border-black bg-transparent texthelvetica20 clr15op50 lg:pl-3    py-3 px-3   appearance-none leading-normal   " />
                    <label   className="absolute font-helvetica text-font20 text-[#15151550] top-3 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Phone</label>
            </div>
            <div className="relative float-label-input mb-4 md:mb-8 mt-0">
            <textarea
                    className="border-b w-full border-gray-400 focus:outline-none focus:border-black bg-transparent h-[131px] resize-none"
                ></textarea>
                <label className="absolute font-helvetica text-font20 text-[#15151550] top-1 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Message</label>
                </div>



            {/* <div className="mt-6  border-gray-400  bg-[#D8D4CF] rounded-md text-font20">
                <div className="flex items-center py-3 rounded-md  lg:w-1/2 px-4 lg:gap-14 gap-3">
                    <label className="text-sm text-gray-600">Resume</label>
                    <div>
                        <label className="font-semibold text-gray-900 cursor-pointer">
                            Choose File
                            <input type="file" className="hidden" />
                        </label>
                        <span className="ml-4 text-gray-600 text-sm">skzresume.pdf</span>
                    </div>

                </div>
            </div> */}

            <button
                type="submit"
                className="mt-6    group items-center hover:border-b-2  border-[#FF671F] text-[#FF671F] pb-2   flex gap-1 nuber-next-heavy text-font18"
            >
                Send Message <div className="transition-all duration-300 group-hover:translate-x-1">
              <svg width="20" height="15" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            </button>
        </form>
  )
}

export default MarketingForm