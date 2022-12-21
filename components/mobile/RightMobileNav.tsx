import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { toggleMobileRightNav } from "../../redux/mobileAppSlice";

function RightMobileNav() {
  const dispatch = useDispatch();
  const handleHideRightNav = () => {
    dispatch(toggleMobileRightNav());
  };
  return (
    <div className="fixed z-50 w-1/2 bg-slate-100 h-screen right-0">
      <div className="m-5">
        <div
          className="flex justify-center items-center"
          onClick={handleHideRightNav}
        >
          <XMarkIcon className="w-4 h-4" />
        </div>
        <div className="pt-10">
          <Link href="/">
            <div className="flex justify-between m-3 pb-5">
              <div className="text-xs font-bold">Home</div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link href="/infant">
            <div className="flex justify-between m-3 pb-5">
              <div className="text-xs font-bold">Infant</div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link href="/boys">
            <div className="flex justify-between m-3 pb-5">
              <div className="text-xs font-bold">Boys</div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link href="/girls">
            <div className="flex justify-between m-3 pb-5">
              <div className="text-xs font-bold">Girls</div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link href="/partywear">
            <div className="flex justify-between m-3 pb-5">
              <div className="text-xs font-bold">Party Wear</div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link href="/ethnic">
            <div className="flex justify-between m-3 pb-5">
              <div className="text-xs font-bold">Ethnic</div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightMobileNav;
