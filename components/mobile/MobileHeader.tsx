import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  HomeIcon,
  HeartIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

import { toggleMobileRightNav } from "../../redux/mobileAppSlice";

function MobileHeader({ brandName, itemInCart }) {
  // const mobileAppState = useSelector(selectRightNavVisible);
  const dispatch = useDispatch();
  const handleShowRightNav = () => {
    dispatch(toggleMobileRightNav());
  };
  return (
    <>
      <div className="flex justify-between items-center m-2 pt-2 pb-2">
        <div className="text-xl font-bold">{brandName}</div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="text-xs text-white bg-[#f4f4f4] border-none rounded-[40px] pl-10 focus:outline-none focus:bg-white"
            placeholder="Search..."
            autocomplete="off"
          />
        </div>

        <div onClick={handleShowRightNav}>
          <Bars4Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="fixed bottom-0 z-50 h-auto bg-white w-screen ml-4 mr-4">
        <div className="flex mt-2 mb-2 justify-evenly items-center">
          <Link href="/">
            <div className="flex flex-col">
              <HomeIcon className="w-4 h-4" />
              <div className="text-[8px] text-gray-400 uppercase font-bold">
                Home
              </div>
            </div>
          </Link>
          <Link href="/wishlist">
            <div className="flex flex-col">
              <HeartIcon className="w-4 h-4" />
              <div className="text-[8px] text-gray-400 uppercase font-bold">
                Wishlist
              </div>
            </div>
          </Link>
          <Link href="/cart">
            <div className="relative flex flex-col">
              <span className="absolute text-[8px] left-4 -top-2 font-bold bg-yellow-200 rounded-full pr-2 pl-2 pt-1 pb-1">
                {itemInCart}
              </span>
              <ShoppingCartIcon className="w-4 h-4" />
              <div className="text-[8px] text-gray-400 uppercase font-bold">
                Cart
              </div>
            </div>
          </Link>
          <Link href="/account">
            <div className="flex flex-col">
              <UserCircleIcon className="w-4 h-4" />
              <div className="text-[8px] text-gray-400 uppercase font-bold">
                account
              </div>
            </div>
          </Link>
          <div className="flex flex-col">
            <ChevronDoubleUpIcon className="w-4 h-4" />
            <div className="text-[8px] text-gray-400 uppercase font-bold">
              On Top
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
