import React from "react";
import image1 from "../../assets/images/profile/profile v2.png";
import Information from "./Information";
import ProfileTable from "./ProfileTable";

const Profile = () => {
  return (
    <div className="">
      <div className="img flex justify-center">
        <img src={image1} alt="" />
      </div>
      <div className="md:flex">
        <Information />
        <ProfileTable />
      </div>
    </div>
  );
};

export default Profile;
