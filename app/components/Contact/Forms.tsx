import React from 'react'

const Forms = () => {
    return (
        <div className='w-full '>
            <div>
                <ul className='flex gap-5 text-black text-lg'>
                    <li>Sales</li>
                    <li>Marketing & Press</li>
                    <li>Careers</li>
                    <li>General Enquiries</li>
                </ul>
            </div>

            <form className="mx-auto bg-[#E3DED9] p-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-2"
                        />
                    </div>
                </div>

                <div className="mt-6 flex flex-col">
                    <label className="text-sm text-gray-600">Phone</label>
                    <input
                        type="tel"
                        className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-2"
                    />
                </div>

                <div className="mt-6 flex flex-col">
                    <label className="text-sm text-gray-600">Message</label>
                    <textarea
                        className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-2 h-20 resize-none"
                    ></textarea>
                </div>

                <div className="mt-6 border-t border-gray-400 pt-4">
                    <label className="text-sm text-gray-600">Resume</label>
                    <div className="flex items-center bg-gray-200 px-4 py-3 rounded-md">
                        <label className="font-semibold text-gray-900 cursor-pointer">
                            Choose File
                            <input type="file" className="hidden" />
                        </label>
                        <span className="ml-4 text-gray-600 text-sm">skzresume.pdf</span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 text-orange-600 font-semibold text-sm flex items-center hover:underline"
                >
                    Send Message <span className="ml-2">➤</span>
                </button>
            </form>

        </div>
    )
}

export default Forms