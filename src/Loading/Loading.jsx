import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-300 w-96 shadow-md rounded-lg overflow-hidden mt-14 animate-pulse">
        {/* Skeleton Image */}
        <div className="h-68 w-full bg-gray-300"></div>

        {/* Skeleton Content */}
        <div className="card-body text-center p-4">
          {/* Name */}
          <div className="h-6 w-3/4 bg-gray-300 rounded-md mx-auto"></div>

          {/* Age & Gender */}
          <div className="h-4 w-1/2 bg-gray-300 rounded-md mx-auto mt-2"></div>
          <div className="h-4 w-1/3 bg-gray-300 rounded-md mx-auto mt-2"></div>

          {/* Skills */}
          <div className="h-4 w-2/3 bg-gray-300 rounded-md mx-auto mt-2"></div>

          {/* About */}
          <div className="h-4 w-3/4 bg-gray-300 rounded-md mx-auto mt-2"></div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading;