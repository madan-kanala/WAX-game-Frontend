import React from "react";
import { Link } from "react-router-dom";
import ShopMenu from "./MenuItems/ShopMenu";
const Menu = () => {
  //   const menusList = [
  //     {
  //       id: 1,
  //       label: "Consignment",
  //       url: "/consignment",
  //     },
  //     {
  //       id: 2,
  //       label: "The Corner",
  //       url: "/the-corner",
  //     },
  //   ];

  return (
    <div className="hidden md:block">
      <ul className="flex gap-6">
        <Item text={"home"} url="/" />
        <Item text={"Safe House"} url="/safe-house" />
        <Item text={"Consignment"} url="/consignment" />
        <Item text={"The Corner"} url="/the-corner" />
        <Item text={"Drop Zone"} url="/drop-zone" />
        <ShopMenu />
        <Item text={"Laundering"} url="/laundering" />
      </ul>
    </div>
  );
};

const Item = ({ text, url }) => {
  return (
    <li className="cursor-pointer bg-gradient-to-r from-primary to-primary bg-clip-text font-Inter text-lg font-semibold capitalize tracking-wide text-transparent hover:from-purple-400 hover:to-pink-600 hover:text-money-green">
      <Link to={url} style={{ all: "inherit" }}>
        {text}
      </Link>
    </li>
  );
};

export default Menu;
