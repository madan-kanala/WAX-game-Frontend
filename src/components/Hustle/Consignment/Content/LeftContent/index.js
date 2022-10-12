import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import icon1 from "../../../../../assets/images/icons/solo-g.png";
import Character from "../../../Corner/Content/LeftContent/Character";
const LeftContent = () => {
  const [character, setCharacter] = useState([]);
  return (
    <div className="order-2 w-full md:w-1/2 lg:order-1 lg:w-4/12">
      <div className="mx-4 box-border  pb-4 ">
        <div className="mb-3 flex items-center gap-x-2">
          <p className="ml-4 text-center text-xl font-bold text-olive">
            Transporter: 0/1
          </p>
          <div className="w-8">
            <img src={icon1} alt="" className="object- h-full w-full" />
          </div>
        </div>
        <div className="custom-shadow mr-2 box-border h-80 overflow-hidden rounded-md border bg-black p-6 text-center ">
          <div className="flex h-full items-center justify-center">
            {character.length > 0 ? (
              character.map((i) => <Character />)
            ) : (
              <div
                onClick={() => setCharacter([{ id: 1 }])}
                className="h-full w-full"
              >
                <Add />
              </div>
            )}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-center gap-x-2">
            <div className="w-6">
              <img src={icon1} alt="" className="object- h-full w-full" />
            </div>
            <p className="text-center text-sm font-bold text-olive">
              Locked Up
            </p>
          </div>
          <div className="mx-auto mt-2 w-5/12">
            <p className="text-center text-lg text-primary">0/1</p>
            <div className="btn btn-default flex h-24 w-full items-center justify-center rounded-xl">
              <FaPlus className="text-5xl text-gray-300" />
            </div>
            <p className="btn btn-default mt-3 w-full rounded-md text-center capitalize">
              Get Out of jail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Add = () => {
  return (
    <>
      <div className="flex h-full w-full cursor-pointer items-center justify-center  rounded-3xl border border-gray-400 px-2">
        <FaPlus className="text-5xl text-gray-300" />
      </div>
    </>
  );
};

export default LeftContent;
