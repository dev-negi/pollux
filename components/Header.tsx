import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { selectBasketItems } from "../redux/basketSlice";
function Header({ brandName }) {
  const items = useSelector(selectBasketItems);
  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
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
      </nav>
    </header>
  );
}

export default Header;
