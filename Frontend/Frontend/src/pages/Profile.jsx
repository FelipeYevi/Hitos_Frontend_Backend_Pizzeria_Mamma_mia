import React from "react";

const Profile = () => {
  const email = "FelipeYevilao@gmail.com";
  return (
    <div className="container mt-5">
      <div className="w-50 mx-auto border p-4 text-center">
        <h3 className="mb-3">Email</h3>
        <p className="mb-4">{email}</p>
        <button className="btn btn-danger">🔒 Logout</button>
      </div>
    </div>
  );
};

export default Profile;
