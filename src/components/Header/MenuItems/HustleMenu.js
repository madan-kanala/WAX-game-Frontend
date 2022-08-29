import React, { useState } from "react";
import DropDown from "../../shared/DropDown/DropDown";
import Menus from "./Menus";

const HustleMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const menusList = [
    {
      id: 1,
      label: "Consignment",
      url: "/consignment",
    },
    {
      id: 2,
      label: "The Corner",
      url: "/the-corner",
    },
    {
      id: 3,
      label: "The Traphouse",
      url: "/the-traphouse",
    },
    {
      id: 4,
      label: "Clandestine Lab",
      url: "/clandestine-lab",
    },
  ];

  return (
    <DropDown
      isShow={isShow}
      onClose={setIsShow}
      element={<Menus list={menusList} />}
    >
      <div type="button">
        <div
          className={`text-transparent bg-clip-text bg-gradient-to-r capitalize cursor-pointer hover:from-purple-400 hover:to-pink-600 font-Inter text-lg font-bold tracking-wide ${
            isShow
              ? "bg-gradient-to-r from-purple-400 to-pink-600"
              : "from-white to-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsShow(true);
          }}
        >
          Hustle
        </div>
      </div>
    </DropDown>
  );
};

export default HustleMenu;
