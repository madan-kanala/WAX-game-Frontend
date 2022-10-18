import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import icon1 from "../../../../../assets/images/icons/solo-bood.png";
import AddBoost from "./AddBoost";
import AddForm from "./AddForm";
import data from "./data.json";
const RightContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slots, setSlots] = useState(data);
  const [totalSlots] = useState(8);

  useEffect(() => {
    setSlots(data.slice(0, 3));
  }, []);

  return (
    <div className=" order-3 mt-12 w-full md:mt-0 md:w-1/2 lg:w-4/12 ">
      <div className="mb-2 flex items-center justify-between">
        <div className="ml-4 flex items-center gap-x-2">
          <div className="w-10">
            <img src={icon1} alt="" className="object- h-full w-full" />
          </div>
          <p className=" text-center text-xl font-bold text-olive">
            Active Boosts: {slots.length} / {totalSlots}
          </p>
        </div>
        <p
          className="btn btn-default cursor-pointer rounded-md text-sm"
          onClick={() => setIsOpen(true)}
        >
          Add Slot
        </p>
      </div>
      <div className="custom-shadow mx-3 mr-2 h-80  overflow-y-auto rounded-md border bg-black p-8  ">
        <div className="flex flex-wrap gap-y-4 ">
          {slots.map((slot) => (
            <Item image={slot.image} key={slot.id} />
          ))}
          <Add />
        </div>
      </div>
      <AddForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

const Item = ({ image }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-full xl:w-1/2 ">
      <div className="h-32 w-full px-2">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};
const Add = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full sm:w-1/2 md:w-full xl:w-1/2 ">
      <div
        className="flex h-32 w-full cursor-pointer items-center  justify-center border border-gray-400 px-2"
        onClick={() => setIsOpen(true)}
      >
        <FaPlus className="text-5xl text-gray-300" />
      </div>
      <AddBoost isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default RightContent;
