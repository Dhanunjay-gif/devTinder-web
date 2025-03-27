import React from 'react'

const Loading = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen">
            <progress className="progress w-56"></progress>
        </div>
    </div>
  )
}

export default Loading;