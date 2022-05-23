import React from "react";
import Link from "next/link";
import Image from "next/image"
import Head from "next/head"
import Layout from "../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
          <title>Hi</title>
      </Head>
      <h1>hi</h1>
      {/* <Image
        src="../public/vercel.svg"
        height={144}
        width={144}
      /> */}
      <Link href="/">
        <a style={{textDecoration: 'none', fontSize: "10em", color: "black"}}>Now go back</a>
      </Link>
    </Layout>
  );
}
