import Head from "next/head";
import Link from "next/link";

import { brandName } from "../constant";

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ? `title +  - ${brandName}` : brandName}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <div className="text-lg font-bold">
              <Link href="/">{brandName}</Link>
            </div>
            <div className="flex">
              <div className="p-2">
                <Link href="/cart">Cart</Link>
              </div>
              <div className="p-2">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 {brandName}</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
