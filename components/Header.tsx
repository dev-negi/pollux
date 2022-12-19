import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import { brandName } from "../constant";

import { selectBasketItems } from "../redux/basketSlice";
function Header() {
  const items = useSelector(selectBasketItems);
  const [offset, setOffset] = useState(0);
  console.log("offset:-", offset);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative h-auto border-2 border-red-500">
      <div className="flex p-10">
        <div className="flex flex-1 items-center flex-wrap justify-between mr-auto">
          <div className="">
            <nav className="">
              <ul className="flex justify-between items-center">
                <li className="relative mr-10">Home</li>
                <li className="relative mr-10">Infent</li>
                <li className="relative mr-10">Boys</li>
                <li className="relative mr-10">Girls</li>
                <li className="relative mr-10">Party Wear</li>
                <li className="relative mr-10">Ethinc</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="justify-cente text-3xl font-bold">{brandName}</div>
        <div className="flex flex-1 justify-end gap-x-5">
          <div className="flex justify-center items-center">
            <MagnifyingGlassIcon className="w-6 h-6" />
            <div className="pl-4 text-xs">Search</div>
          </div>
          <div className="flex justify-center items-center">
            <UserCircleIcon className="w-6 h-6" />
            <div className="pl-4 text-xs">Account</div>
          </div>
          <div className="flex justify-center items-center">
            <ShoppingBagIcon className="w-6 h-6" />
            <div className="pl-4 text-xs">
              Cart{" "}
              <span className="font-bold bg-yellow-200 rounded-full pr-2 pl-2 pt-1 pb-1">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

{
  /* <nav className="flex h-20 items-center px-4 justify-between shadow-md">
        <div className="text-lg font-bold">
          <Link href="/">{brandName}</Link>
        </div>
        <div className="flex">
          <div className="p-2">
            <Link href="/cart">
              {items?.length > 0 && (
                <span className="absolute right-0 top-0 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                  {items.length}
                </span>
              )}
              Cart
            </Link>
          </div>
          <div className="p-2">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav> */
}

{
  /* <header className="h-auto border-2 border-red-500">
<div className="p-10">
  <div className="flex items-center flex-wrap justify-between mr-auto">
    <div className="">
      <nav className="">
        <ul className="flex justify-between items-center">
          <li className="relative mr-10">Home</li>
          <li className="relative mr-10">Infent</li>
          <li className="relative mr-10">Boys</li>
          <li className="relative mr-10">Girls</li>
          <li className="relative mr-10">Party Wear</li>
          <li className="relative mr-10">Ethinc</li>
        </ul>
      </nav>
    </div>
    <div className="flex-1 flex justify-center text-3xl font-bold">
      {brandName}
    </div>
    <div className="flex justify-end items-center ml-auto">
      <div className="ml-10">search</div>
      <div className="ml-10">account</div>
      <div className="ml-10">cart Count</div>
    </div>
  </div>
</div>
</header> */
}
