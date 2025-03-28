import React from 'react';
import CardSkeletonEffect from '../Loading/CardSkeletonEffect';

const ConnectionRequestCard = ({ user }) => {

  const { firstName, lastName, age, about, gender, photourl, skills } = user;
  
  return (
    <tr className="border-b border-gray-300 hover:cursor-pointer">
      {/* Name and Profile */}
      <td className="p-4 flex items-center gap-4">
        <div className="h-12 w-12 flex-shrink-0 rounded-full overflow-hidden">
          <img src={photourl} alt="User" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="font-semibold">{firstName} {lastName}</div>
          <div className="text-sm opacity-50">India</div>
        </div>
      </td>

      {/* Gender and Age */}
      <td className="p-4 text-center">
        {gender}
        <br />
        <span className="text-sm opacity-50">Age: {age}</span>
      </td>

      {/* Skills */}
      <td className="p-4 text-center">
        {skills && skills.length > 0 ? skills.join(", ") : "N/A"}
      </td>

      {/* About Button */}
      <td className="p-4 text-center">
        <button className="px-4 py-2 rounded-lg border border-gray-400 hover:cursor-pointer">
          {about || "No details available"}
        </button>
      </td>
    </tr>
  );
};

export default ConnectionRequestCard;
