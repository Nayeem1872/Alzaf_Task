import React from 'react'

const Searchbox = () => {
  return (
    <div className="flex items-center gap-7">
    <div className="relative ">
    <input
      type="text"
      placeholder="Search Product"
      className="w-[704px] h-[44px] pl-4 pr-12 rounded-lg border bg-[#EFF0F5] focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <div className="absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-orange-500 -mr-2 rounded-lg w-[47px] h-[44px] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-[17.46px] h-[17.46px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        />
      </svg>
    </div>
  </div>
  <div className="flex space-x-2">
        {/* User Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-lg border cursor-pointer border-gray-300 bg-[#F5F5F5]">
        <img src="/images/user.png" alt="user" className="w-5 h-5" />
        </div>

        {/* Love Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer border border-gray-300 bg-[#F5F5F5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="gray"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.5A5.5 5.5 0 018.5 3a5.5 5.5 0 014.5 2.357A5.5 5.5 0 0117.5 3 5.5 5.5 0 0123 8.5c0 3.278-2.6 6.1-9.6 11.745a.75.75 0 01-.8 0C5.6 14.6 3 11.778 3 8.5z"
            />
          </svg>
        </div>

        {/* Cart Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer border border-gray-300 bg-[#F5F5F5]">
        <img src="/images/cart.png" alt="user" className="w-5 h-5" />
        </div>
      </div>
  </div>
  )
}

export default Searchbox