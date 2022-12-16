import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
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
        <Header />
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
