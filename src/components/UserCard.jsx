import React from 'react';

const UserCard = ({ user }) => {
  const { firstName, lastName, photourl, age, gender, about,skills } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-md rounded-lg overflow-hidden mt-8">
      <figure className="h-68 w-full">
        <img
          src={photourl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body text-center p-4">
        <h2 className="card-title text-lg text-gray-300 font-semibold">{firstName} {lastName}</h2>
        {age && <p className="text-gray-600">Age: {age}</p>}
        {gender && <p className="text-gray-600 capitalize">Gender: {gender}</p>}
        {skills && <p className="text-gray-700 mt-2">Skills: {skills.join(", ")}</p> }
        {about && <p className="text-gray-700 mt-2">{about}</p> }
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-outline btn-error">Ignore</button>
          <button className="btn btn-outline btn-success">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
