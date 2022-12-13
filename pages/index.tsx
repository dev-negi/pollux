import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch();
      } catch (error) {}
    };
  });
  return <Layout>List Product</Layout>;
}
