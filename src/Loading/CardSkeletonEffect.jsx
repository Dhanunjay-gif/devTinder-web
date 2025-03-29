import React from "react";

const CardSkeletonEffect = () => {
    return (
        <div className="bg-white w-full max-w-xl p-5 rounded-xl flex items-center justify-center space-x-4 shadow-lg">
            <div className="h-20 w-200 flex items-center">
                <div className="bg-gray-300 h-20 w-20 rounded-full"></div>
            </div>
        </div>
    );
};

export default CardSkeletonEffect;
