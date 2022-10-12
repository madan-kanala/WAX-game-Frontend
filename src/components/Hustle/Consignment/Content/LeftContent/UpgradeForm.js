import React from "react";
import { FaTimes } from "react-icons/fa";
import icon3 from "../../../../../assets/images/icons/clean-cash.png";
import icon4 from "../../../../../assets/images/icons/hst-final.png";
import icon2 from "../../../../../assets/images/icons/hustler-clean-cash-token.png";
import icon1 from "../../../../../assets/images/icons/slot.png";
import Modal from "../../../../shared/Modal";

import { v4 as uuid } from "uuid";
const data = [
  {
    id: uuid(),
    icon: icon2,
    cost: "25000",
  },
  {
    id: uuid(),
    icon: icon3,
    cost: "15000",
  },
  {
    id: uuid(),
    icon: icon4,
    cost: "1000",
  },
];
const UpgradeForm = ({ isOpen, setIsOpen, startUpgradeTimer }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    startUpgradeTimer(1000 * 60 * 60);
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      //   className='w-8/12'
    >
      <div
        className="w-full rounded-md bg-black py-4 px-6"
        style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
      >
        <form onSubmit={submitHandler}>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="px-5 py-2 text-center font-Inter text-2xl font-bold text-olive">
              Upgrade Character
            </h2>
            <FaTimes
              className="block text-2xl text-olive hover:cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>

          <div className="flex justify-center">
            <div>
              <div
                className="flex items-center justify-center gap-x-3"
                key={Math.random()}
              >
                <div className="w-10">
                  <img
                    src={icon1}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <p className="font-bold text-primary">1000</p>
              </div>
              {data.map((item) => (
                <div className="flex  items-center gap-x-3" key={Math.random()}>
                  <div className="w-16">
                    <img
                      src={item.icon}
                      className="h-full w-full object-contain"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-primary">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="btn btn-profile rounded">Upgrade</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpgradeForm;
