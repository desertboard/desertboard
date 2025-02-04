import React from 'react'

const SalesForm = () => {
    return (
        <form className="mx-auto bg-[#E3DED9] lg:px-6 px-2 py-8 text-black">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 lg:pl-3">Name</label>
                    <input
                        type="text"
                        className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent h-4"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 lg:pl-3">Email</label>
                    <input
                        type="email"
                        className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent  h-4"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-col">
                <label className="text-sm text-gray-600 lg:pl-3">Phone</label>
                <input
                    type="tel"
                    className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent  h-4"
                />
            </div>

            <div className="mt-6 flex flex-col">
                <label className="text-sm text-gray-600 lg:pl-3">Message</label>
                <textarea
                    className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent h-16 resize-none"
                ></textarea>
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
                className="mt-6 font-semibold text-sm  group items-center hover:border-b-2  border-[#FF671F] text-[#FF671F] pb-1 h-6 flex gap-1 nuber-next-heavy"
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

export default SalesForm