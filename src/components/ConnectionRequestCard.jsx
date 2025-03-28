import React from 'react';

const ConnectionRequestCard = ({ user }) => {
  const { firstName, lastName, age, about, gender, photourl, skills } = user;

  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-center text-4xl mb-6">Connections</div>

      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          {/* Table Header */}
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="p-3">Name</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Skills</th>
              <th className="p-3">About</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="border-b border-gray-300">
              {/* Name and Profile */}
              <td className="p-3 flex items-center gap-3">
                <div className="h-12 w-12 flex-shrink-0 rounded-full overflow-hidden">
                  <img src={photourl} alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{firstName} {lastName}</div>
                  <div className="text-sm opacity-50">India</div>
                </div>
              </td>

              {/* Gender and Age */}
              <td className="p-3">
                {gender}
                <br />
                <span className="text-sm opacity-50">Age: {age}</span>
              </td>

              {/* Skills */}
              <td className="p-3">{skills.join(", ")}</td>

              {/* About Button */}
              <td className="p-3">
                <button className="border border-gray-400 px-4 py-1 rounded-md text-sm">
                  {about}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectionRequestCard;
