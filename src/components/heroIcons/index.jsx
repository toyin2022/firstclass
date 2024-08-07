import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import { RiHeadphoneLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";

const HeroIcons = () => {
  return (
    <div className="p-[1rem]">
      <div className="flex gap-5 justify-between">
        <div className="flex gap-5 p-3">
          <div className="icon">
            <TbTruckDelivery size={30} color="red" />
          </div>
          <div className="">
            <p className="font-bold">Free Shipping</p>
            <p>Free Shipping on all orders</p>
          </div>
        </div>
        <div className="flex gap-5 p-3">
          <div className="icon">
            <MdOutlineVerified size={30} color="red" />
          </div>
          <div className="">
            <p className="font-bold">Money Guarantee</p>
            <p>Free Shipping on all orders</p>
          </div>
        </div>
        <div className="flex gap-5 p-3">
          <div className="icon">
            <RiHeadphoneLine size={30} color="red" />
          </div>
          <div className="">
            <p className="font-bold">Online </p>
            <p>Free Shipping on all orders</p>
          </div>
        </div>

        <div className="flex gap-5 p-3">
          <div className="icon">
            <CiWallet size={30} color="red" />
          </div>
          <div className="">
            <p className="font-bold">Secure Payment</p>
            <p>Free Shipping on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIcons;
