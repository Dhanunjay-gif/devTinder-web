import React from 'react'

const CardSkeletonEffect = () => {
    return (
        <div>
            <tr className="border-b border-gray-300 animate-pulse">
                {/* Skeleton Name and Profile */}
                <td className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
                    <div>
                        <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
                        <div className="h-3 w-16 bg-gray-300 rounded-md mt-1"></div>
                    </div>
                </td>

                {/* Skeleton Gender and Age */}
                <td className="p-4 text-center">
                    <div className="h-4 w-12 bg-gray-300 rounded-md mx-auto"></div>
                    <div className="h-3 w-16 bg-gray-300 rounded-md mx-auto mt-1"></div>
                </td>

                {/* Skeleton Skills */}
                <td className="p-4 text-center">
                    <div className="h-4 w-24 bg-gray-300 rounded-md mx-auto"></div>
                </td>

                {/* Skeleton About Button */}
                <td className="p-4 text-center">
                    <div className="h-8 w-24 bg-gray-300 rounded-md mx-auto"></div>
                </td>
            </tr>

        </div>
    )
}

export default CardSkeletonEffect