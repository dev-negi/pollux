import Head from "next/head";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { brandName } from "../constant";
import { useSelector } from "react-redux";
import { selectToastItems } from "../redux/toastSlice";
import { selectRightNavVisible } from "../redux/mobileAppSlice";
import useToaster from "../hooks/useToaster";
import Toast from "../rango/Toast";
import RightMobileNav from "./mobile/RightMobileNav";

function Layout({ title, description, children }) {
  const toastList = useSelector(selectToastItems);
  const isMobilRightNaveVisible = useSelector(selectRightNavVisible);
  console.log("isMobilRightNaveVisible:-", isMobilRightNaveVisible);

  const { removeToaster } = useToaster();
  const [localState, setLocalState] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? `title +  - ${brandName}` : brandName}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        {toastList.length > 0 ? (
          <Toast list={toastList} remove={removeToaster} />
        ) : null}
        <Header />
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
        {isMobilRightNaveVisible ? <RightMobileNav /> : null}
      </div>
    </>
  );
}

export default Layout;
