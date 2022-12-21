import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function DesktopHeader({ brandName, itemInCart }) {
  const [offset, setOffset] = useState(0);
  // TODO Clean code for transistion
  const mainDiv =
    offset > 350
      ? "flex fixed pl-10 pr-10 pt-3 pb-3 w-screen z-50 bg-white transition ease-in duration-500 shadow-lg"
      : "flex p-10 relative h-auto transition ease-out duration-500 opacity-1";
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative h-auto">
      <div className={mainDiv}>
        <div className="flex flex-1 items-center flex-wrap justify-between mr-auto">
          <div className="">
            <nav className="">
              <ul className="flex justify-between hover:bottom-1 ">
                <li className="header-menu-link">
                  <Link href="/">Home</Link>
                </li>
                <li className="header-menu-link">
                  <Link href="/">Infent</Link>
                </li>
                <li className="header-menu-link">
                  <Link href="/">Boys</Link>
                </li>
                <li className="header-menu-link">
                  <Link href="/">Girls</Link>
                </li>
                <li className="header-menu-link">
                  <Link href="/">Party Wear</Link>
                </li>
                <li className="header-menu-link">
                  <Link href="/">Ethinc</Link>
                </li>
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
            <div className="pl-4 text-xs">
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="relative text-[12px] left-10 top-3 font-bold bg-yellow-200 rounded-full pr-2 pl-2 pt-1 pb-1">
              {itemInCart}
            </span>
            <Link href="/cart">
              <ShoppingBagIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
